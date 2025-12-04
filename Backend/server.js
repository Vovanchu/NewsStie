// backend/server.ts
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "2dbff87b77474bef8503a2ba15e4c678";
const BASE = "https://newsapi.org/v2";

app.get("/api/headlines", async (req, res) => {
  const response = await fetch(
    `${BASE}/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/category/:category", async (req, res) => {
  const { category } = req.params;
  const response = await fetch(
    `${BASE}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/search/:query", async (req, res) => {
  const { query } = req.params;
  const response = await fetch(
    `${BASE}/everything?q=${query}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
