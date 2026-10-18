/**
 * A small generative geometric tiling motif, loosely in the spirit of
 * Central Asian girih tilework — built from computed coordinates rather
 * than a static image, and used as a quiet decorative layer (never as a
 * focal element) behind the hero section.
 *
 * Pure presentational SVG: no client-side JS, no animation, safe to render
 * on the server.
 */
export function GirihPattern({
  id = "girih-pattern",
  size = 72,
  strokeWidth = 1,
  primaryColor = "var(--color-teal)",
  accentColor = "var(--color-gold)",
  className,
}: {
  id?: string;
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  accentColor?: string;
  className?: string;
}) {
  const half = size / 2;
  const inset = size * 0.0625; // distance from edge midpoint to diamond tip
  const cornerDiamond = size * 0.09;

  // Large diamond touching each edge midpoint of the tile.
  const diamond = [
    [half, inset],
    [size - inset, half],
    [half, size - inset],
    [inset, half],
  ]
    .map((point) => point.join(","))
    .join(" ");

  // Small accent diamonds centered on each corner of the tile, clipped by
  // the tile boundary via the repeating pattern itself.
  const corners: [number, number][] = [
    [0, 0],
    [size, 0],
    [0, size],
    [size, size],
  ];

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon points={diamond} fill="none" stroke={primaryColor} strokeWidth={strokeWidth} />
          {corners.map(([cx, cy]) => (
            <polygon
              key={`${cx}-${cy}`}
              points={[
                [cx, cy - cornerDiamond],
                [cx + cornerDiamond, cy],
                [cx, cy + cornerDiamond],
                [cx - cornerDiamond, cy],
              ]
                .map((p) => p.join(","))
                .join(" ")}
              fill="none"
              stroke={accentColor}
              strokeWidth={strokeWidth}
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
