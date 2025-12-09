import type { NewsArticle } from "../types/news";
import type { CategoryKey } from "../types/category";
import { apiClient } from "./apiClient";

export const newsApi = {
  getByCategory: (category: CategoryKey, signal?: AbortSignal) =>
    apiClient.request<{ articles: NewsArticle[] }>(
      `/api/category/${category}`,
      { signal }
    ),

  getHeadlines: (signal?: AbortSignal) =>
    apiClient.request<{ articles: NewsArticle[] }>(`/api/headlines`, {
      signal,
    }),

  search: (query: string, signal?: AbortSignal) =>
    apiClient.request<{ articles: NewsArticle[] }>(`/api/search/${query}`, {
      signal,
    }),
};
