// Centralized site identity. Replace every value marked PLACEHOLDER with
// your real information — nothing else in the app needs to change.
export const site = {
  name: "Your Name", // PLACEHOLDER
  role: "Frontend developer",
  tagline: "Building clean, fast interfaces while learning in public.",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  available: true,
  email: "you@example.com", // PLACEHOLDER
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com", // PLACEHOLDER
  description:
    "Portfolio of a self-taught frontend developer working with JavaScript, React, Next.js and TypeScript.",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-handle", icon: "github" }, // PLACEHOLDER
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: "linkedin" }, // PLACEHOLDER
  { label: "Telegram", href: "https://t.me/your-handle", icon: "telegram" }, // PLACEHOLDER
  { label: "Email", href: "mailto:you@example.com", icon: "mail" }, // PLACEHOLDER
] as const;
