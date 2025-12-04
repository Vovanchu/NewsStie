import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getByCategory } from "../../api/newsApi";
import styles from "./Category.module.scss";
import type { NewsArticle } from "../../types/news";
import { NewsList } from "../../components/NewsList";
import { NewsSkeleton } from "../../components/NewsSceleton";

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const allowedCategories = ["sports", "technology", "science", "politics"];

  useEffect(() => {
    if (!categoryName) return;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getByCategory(categoryName);
        setArticles(data.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryName]);

  if (!categoryName || !allowedCategories.includes(categoryName)) {
    return <Navigate to="/404" replace />;
  }
  return (
    <div className={styles.category}>
      <h1 className={styles.category__title}>{categoryName} News</h1>

      {/* Skeleton grid */}
      {loading && (
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      )}

      <ul className={styles.category__list}>
        <NewsList items={articles} />
      </ul>
    </div>
  );
};

export default Category;
