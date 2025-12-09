import type { CategoryKey } from "./category";

export interface NavItem {
  path: string;
  label: string;
  category?: CategoryKey;
}
