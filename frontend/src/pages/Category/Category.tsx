import { Navigate, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import styles from "./Category.module.scss";
import { NewsList } from "../../components/NewsList";
import { NewsSkeleton } from "../../components/NewsSceleton";
import { nanoid } from "nanoid";
import { SKELETON_COUNT } from "../../constants/constants";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import {
  fetchArticlesByCategory,
  clearArticles,
} from "../../store/slices/newsSlice";

import { allowedCategories } from "../../types/category";
import type { CategoryKey } from "../../types/category";

const Category = () => {
  const { categoryName } = useParams<{ categoryName: CategoryKey }>();
  const dispatch = useDispatch<AppDispatch>();

  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  const skeletons = useMemo(
    () => Array.from({ length: SKELETON_COUNT }).map(() => nanoid()),
    []
  );

  useEffect(() => {
    if (!categoryName) return;

    dispatch(fetchArticlesByCategory(categoryName));

    return () => {
      dispatch(clearArticles());
    };
  }, [categoryName, dispatch]);

  if (!categoryName || !allowedCategories[categoryName]) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles.category}>
      <h1 className={styles.category__title}>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>

      {loading && (
        <div className={styles.skeletonGrid}>
          {skeletons.map((id) => (
            <NewsSkeleton key={id} />
          ))}
        </div>
      )}

      {error && <div className={styles.error}>Error: {error}</div>}

      {!loading && !error && (
        <ul className={styles.category__list}>
          <NewsList items={articles} />
        </ul>
      )}
    </div>
  );
};

export default Category;
