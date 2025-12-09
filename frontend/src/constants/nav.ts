import type { NavItem } from "../types/nav";

export const navItems: NavItem[] = [
  { path: "/", label: "All News" },
  { path: "/category/sports", label: "Sports", category: "sports" },
  { path: "/category/technology", label: "Tech", category: "technology" },
  { path: "/category/science", label: "Science", category: "science" },
  { path: "/category/politics", label: "Politics", category: "politics" },
];
