import { useEffect } from "react";
import styles from "./Home.module.scss";
import { NewsList } from "../../components/NewsList";
import { LoadingSpinner } from "../../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchHeadlines } from "../../store/slices/newsSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.home}>
      <h1>Latest News</h1>

      <NewsList items={articles} />
    </div>
  );
};

export default Home;
