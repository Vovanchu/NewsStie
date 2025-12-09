import { useEffect, useMemo } from "react";
import styles from "./Search.module.scss";
import { NewsList } from "../../components/NewsList";
import { NewsSkeleton } from "../../components/NewsSceleton";
import { nanoid } from "nanoid";
import { SKELETON_COUNT } from "../../constants/constants";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import {
  fetchSearchResults,
  clearArticles,
} from "../../store/slices/newsSlice";

const Search = () => {
  const { query } = useParams<{ query: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  const skeletons = useMemo(
    () => Array.from({ length: SKELETON_COUNT }).map(() => nanoid()),
    []
  );

  useEffect(() => {
    if (!query) return;

    dispatch(fetchSearchResults(query));

    return () => {
      dispatch(clearArticles());
    };
  }, [query, dispatch]);

  return (
    <div className={styles.search}>
      <h1>SEARCH RESULTS FOR: {query}</h1>

      {loading && (
        <div className={styles.skeletonGrid}>
          {skeletons.map((id) => (
            <NewsSkeleton key={id} />
          ))}
        </div>
      )}

      {error && <div className={styles.error}>Error: {error}</div>}

      {!loading && !error && articles.length === 0 && (
        <div className={styles.empty}>
          <h2>No results found</h2>
          <p>Try searching for something else.</p>
        </div>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className={styles.fadeIn}>
          <NewsList items={articles} />
        </div>
      )}
    </div>
  );
};

export default Search;
