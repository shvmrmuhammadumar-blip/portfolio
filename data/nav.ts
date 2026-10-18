import type { NavItem } from "@/types";

// "path" is the mono breadcrumb-style label used in the nav and as section
// eyebrows, "href" is the actual route.
export const navItems: NavItem[] = [
  { label: "Home", path: "~/home", href: "/" },
  { label: "About", path: "~/about", href: "/about" },
  { label: "Projects", path: "~/projects", href: "/projects" },
  { label: "Skills", path: "~/skills", href: "/skills" },
  { label: "Contact", path: "~/contact", href: "/contact" },
];
