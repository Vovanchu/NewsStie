import React, { useEffect, useMemo, useState } from "react";
import styles from "./NewsList.module.scss";
import type { NewsListProps } from "../../types/newsListProps";
import { MAX_ARTICLES_PER_PAGE as itemsPerPage } from "../../constants/constants";
import NewsItem from "../NewsItem/NewsItem";

const NewsList: React.FC<NewsListProps> = ({ items = [] }) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items]
  );

  const currentItems = useMemo(
    () => items.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [items, page]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentItems]);

  if (items.length === 0)
    return <div className={styles.error}>No news found</div>;

  return (
    <>
      <div className={styles.newsList}>
        {currentItems.map((article) => (
          <NewsItem key={article.url} article={article} />
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

export default React.memo(NewsList);
