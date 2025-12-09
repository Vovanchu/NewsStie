import type { NewsArticle } from "./news";

export interface NewsState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
}
