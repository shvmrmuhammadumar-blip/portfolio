import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-text text-ink hover:opacity-90 dark:bg-teal dark:text-ink border border-transparent",
  secondary: "bg-surface-2 text-text hover:bg-line border border-line",
  outline: "bg-transparent text-text border border-line hover:border-line-strong",
  ghost: "bg-transparent text-text-secondary hover:text-text hover:bg-surface-2 border border-transparent",
  danger: "bg-danger text-white hover:opacity-90 border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-[10px] font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading,
    leftIcon,
    rightIcon,
    fullWidth,
    className,
    children,
  } = props;

  const classes = cn(
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = props.external ?? props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      {...buttonProps}
      disabled={loading || buttonProps.disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
