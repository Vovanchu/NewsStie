// src/components/NewsList.tsx
import React from "react";
import styles from "./NewsList.module.scss";
import type { NewsArticle } from "../../types/news";

interface NewsListProps {
  items: NewsArticle[];
}

const NewsList: React.FC<NewsListProps> = ({ items = [] }) => {
  if (items.length === 0)
    return <div className={styles.error}>No news found</div>;

  return (
    <div className={styles.newsList}>
      {items.map((article, idx) => (
        <a
          key={idx}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.newsItem}
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className={styles.newsImage}
            />
          )}
          <div className={styles.newsContent}>
            <h2 className={styles.newsTitle}>{article.title}</h2>
            {article.description && (
              <p className={styles.newsDescription}>{article.description}</p>
            )}
            {article.source?.name && (
              <span className={styles.newsSource}>{article.source.name}</span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsList;
