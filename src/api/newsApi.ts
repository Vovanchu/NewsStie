const API_KEY = "2dbff87b77474bef8503a2ba15e4c678";
const BASE = "https://newsapi.org/v2";
import type { NewsApiResponse } from "../types/news";

export const getHeadlines = async (): Promise<NewsApiResponse> => {
  const res = await fetch(`${BASE}/top-headlines?country=us&apiKey=${API_KEY}`);
  return res.json();
};

export const getByCategory = async (category: string) => {
  const res = await fetch(
    `${BASE}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  return res.json();
};

export const searchNews = async (query: string) => {
  const res = await fetch(`${BASE}/everything?q=${query}&apiKey=${API_KEY}`);
  return res.json();
};
