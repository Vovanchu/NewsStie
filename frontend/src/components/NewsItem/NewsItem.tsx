import React from "react";
import styles from "./NewsItem.module.scss";
import type { NewsItemProps } from "../../types/newItem";

const NewsItem: React.FC<NewsItemProps> = ({ article }) => (
  <a
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
);

export default React.memo(NewsItem);
