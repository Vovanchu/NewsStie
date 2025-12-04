import styles from "./Loading.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
