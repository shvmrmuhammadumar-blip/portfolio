import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  interactive,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface p-6 shadow-soft transition-all duration-300",
        interactive && "hover:-translate-y-1 hover:border-line-strong",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
