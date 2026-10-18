"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function IconButton({
  children,
  className,
  label,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-[10px] border border-line bg-surface text-text-secondary transition-colors duration-200 hover:border-line-strong hover:text-text",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
