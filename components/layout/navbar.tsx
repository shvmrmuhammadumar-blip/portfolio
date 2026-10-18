"use client";

import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { useCommandPalette } from "@/components/providers/command-palette-provider";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen } = useCommandPalette();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link href="/" className="font-mono text-sm font-medium text-text">
          {"<"}
          {site.name.split(" ")[0]}
          {" />"}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 font-mono text-sm transition-colors",
                    active ? "text-teal" : "text-text-secondary hover:text-text",
                  )}
                >
                  {item.path}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <IconButton
            label="Search pages and projects (Cmd+K)"
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex"
          >
            <Search className="size-4" aria-hidden />
          </IconButton>
          <IconButton label="Toggle color theme" onClick={toggleTheme}>
            {/* Both icons always render; CSS (not JS state) decides which is visible,
                so there's no hydration mismatch to guard against with a "mounted" flag. */}
            <Sun className="hidden size-4 dark:inline" aria-hidden />
            <Moon className="size-4 dark:hidden" aria-hidden />
          </IconButton>
          <IconButton
            label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
            className="md:hidden"
          >
            {mobileOpen ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </IconButton>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-line bg-ink md:hidden"
          >
            <ul className="flex flex-col px-5 py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-md px-2 py-3 font-mono text-sm",
                      pathname === item.href ? "text-teal" : "text-text-secondary",
                    )}
                  >
                    {item.path}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
