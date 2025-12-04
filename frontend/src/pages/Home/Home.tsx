// src/pages/Home.tsx
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { getHeadlines } from "../../api/newsApi";
import { NewsList } from "../../components/NewsList/index";
import type { NewsArticle } from "../../types/news";
import { LoadingSpinner } from "../../components/Loading";

const Home = () => {
  const [data, setData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getHeadlines();
        setData(response.articles);
      } catch {
        alert(" Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.home}>
      <h1>Latest News</h1>

      <NewsList items={data} />
    </div>
  );
};

export default Home;
