import type { Metadata, Viewport } from "next";

import { CommandPalette } from "@/components/layout/command-palette";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CommandPaletteProvider } from "@/components/providers/command-palette-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { site } from "@/data/site";
import "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: ["frontend developer", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d12" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" id="top">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CommandPaletteProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:shadow-soft"
            >
              Skip to content
            </a>
            <ScrollProgress />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <CommandPalette />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
