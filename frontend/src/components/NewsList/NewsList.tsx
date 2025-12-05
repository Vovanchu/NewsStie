// src/components/NewsList.tsx
import React, { useEffect, useState } from "react";
import styles from "./NewsList.module.scss";
import type { NewsListProps } from "../../types/newsListProps";

const NewsList: React.FC<NewsListProps> = ({
  items = [],
  itemsPerPage = 6,
}) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentItems]);

  if (items.length === 0)
    return <div className={styles.error}>No news found</div>;

  return (
    <>
      <div className={styles.newsList}>
        {currentItems.map((article, idx) => (
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

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          className={styles.pageBtn}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        <span className={styles.pageInfo}>
          {page} / {totalPages}
        </span>

        <button
          className={styles.pageBtn}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NewsList;
