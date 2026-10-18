import { GirihPattern } from "@/components/patterns/girih-pattern";
import { site } from "@/data/site";

/**
 * Elegant placeholder standing in for a real photo. Swap this component out
 * for a <Image> once you have a portrait — every place it's used only cares
 * about the rendered size, not the implementation.
 */
export function PortraitPlaceholder({ className }: { className?: string }) {
  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-card border border-line bg-surface-2 ${className ?? ""}`}
    >
      <div className="absolute inset-0 opacity-20">
        <GirihPattern size={56} strokeWidth={1} />
      </div>
      <span className="relative font-heading text-5xl text-text-secondary">{initials}</span>
      <span className="sr-only">Portrait placeholder for {site.name}</span>
    </div>
  );
}
