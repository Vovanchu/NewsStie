import "dotenv/config";

const BASE_URL = import.meta.env.PROD
  ? "https://news-backend-2pdm.onrender.com"
  : import.meta.env.VITE_API_URL;

export const getHeadlines = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/headlines`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching headlines:", err);
  }
};

export const getByCategory = async (category: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/category/${category}`);
    return await res.json();
  } catch (err) {
    console.error(`Error fetching category ${category}:`, err);
  }
};

export const searchNews = async (query: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/search/${query}`);
    return await res.json();
  } catch (err) {
    console.error(`Error searching news for "${query}":`, err);
  }
};
