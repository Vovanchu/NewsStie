import type { NewsArticle } from "./news";

export interface NewsListProps {
  items: NewsArticle[];
  itemsPerPage?: number;
}
