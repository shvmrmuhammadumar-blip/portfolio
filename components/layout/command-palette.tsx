"use client";

import { ArrowRight, FileText, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { useCommandPalette } from "@/components/providers/command-palette-provider";
import { navItems } from "@/data/nav";
import { projects } from "@/data/projects";

interface PaletteItem {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  kind: "page" | "project";
}

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo<PaletteItem[]>(
    () => [
      ...navItems.map((item) => ({
        id: `page-${item.href}`,
        label: item.label,
        sublabel: item.path,
        href: item.href,
        kind: "page" as const,
      })),
      ...projects.map((project) => ({
        id: `project-${project.slug}`,
        label: project.title,
        sublabel: project.description,
        href: `/projects/${project.slug}`,
        kind: "project" as const,
      })),
    ],
    [],
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(normalized) || item.sublabel.toLowerCase().includes(normalized),
    );
  }, [items, query]);

  // Reset transient UI state when the palette opens or closes. Adjusting
  // state during render (comparing against the previous prop) is the
  // pattern React recommends for this instead of a setState-in-effect.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    setActiveIndex(0);
    if (!open) setQuery("");
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function navigateTo(item: PaletteItem) {
    setOpen(false);
    router.push(item.href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(filtered.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = filtered[activeIndex];
      if (item) navigateTo(item);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-card border border-line bg-surface shadow-soft"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Search className="size-4 text-text-muted" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Jump to a page or project..."
                className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
                aria-label="Search pages and projects"
              />
              <kbd className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] text-text-muted">
                esc
              </kbd>
            </div>

            <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-text-muted">No matches. Try another search.</li>
              )}
              {filtered.map((item, index) => (
                <li key={item.id} role="option" aria-selected={index === activeIndex}>
                  <button
                    onClick={() => navigateTo(item)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors ${
                      index === activeIndex ? "bg-surface-2" : ""
                    }`}
                  >
                    <FileText className="size-4 shrink-0 text-text-muted" aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm text-text">{item.label}</span>
                      <span className="block truncate font-mono text-xs text-text-muted">{item.sublabel}</span>
                    </span>
                    <ArrowRight className="size-3.5 shrink-0 text-text-muted" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
