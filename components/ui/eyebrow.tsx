import { cn } from "@/lib/utils";

/**
 * The site's recurring "system voice" label — a monospace, file-path style
 * marker used as a section eyebrow and echoed in the nav for wayfinding.
 */
export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn("font-mono text-xs text-teal", className)}>
      <span className="text-text-muted">{"// "}</span>
      {children}
    </p>
  );
}
