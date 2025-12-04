import styles from "./Search.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../api/newsApi";
import { NewsList } from "../../components/NewsList";
import type { NewsArticle } from "../../types/news";
import { NewsSkeleton } from "../../components/NewsSceleton";

const Search = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const { query } = useParams<{ query: string }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchArticles = async () => {
      setLoading(true);
      try {
        const data = await searchNews(query);
        setArticles(data.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query]);

  return (
    <div className={styles.search}>
      <h1>SEARCH RESULTS FOR: {query}</h1>

      {/* Skeleton grid */}
      {loading && (
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && articles.length === 0 && (
        <div className={styles.empty}>
          <h2>No results found</h2>
          <p>Try searching for something else.</p>
        </div>
      )}

      {/* News with fade-in */}
      {!loading && articles.length > 0 && (
        <div className={styles.fadeIn}>
          <NewsList items={articles} />
        </div>
      )}
    </div>
  );
};

export default Search;
