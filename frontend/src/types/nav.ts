import type { Category } from "./category";

export interface NavItem {
  path: string;
  label: string;
  category?: Category;
}
