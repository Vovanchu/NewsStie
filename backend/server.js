import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY;
if (!API_KEY) {
  console.error("ERROR: NEWS_API_KEY is not defined in .env");
  process.exit(1);
}

const PORT = process.env.PORT || 5001;
const BASE = "https://newsapi.org/v2";

app.get("/api/headlines", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE}/top-headlines?country=us&apiKey=${API_KEY}`,
      {
        headers: { "User-Agent": "news-app" },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch headlines" });
  }
});

app.get("/api/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const response = await fetch(
      `${BASE}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`,
      {
        headers: { "User-Agent": "news-app" },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch category news" });
  }
});

app.get("/api/search/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const response = await fetch(
      `${BASE}/everything?q=${query}&apiKey=${API_KEY}`,
      {
        headers: { "User-Agent": "news-app" },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to search news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
