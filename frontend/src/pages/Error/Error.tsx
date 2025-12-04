import { useNavigate } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        {/* Animated 404 */}
        <div className={styles.errorNumber}>
          <span className={styles.four}>4</span>
          <span className={styles.zero}>
            <div className={styles.newspaperIcon}>
              <div className={styles.newspaperFold}></div>
              <div className={styles.newspaperLines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </span>
          <span className={styles.four}>4</span>
        </div>

        {/* Error Message */}
        <h1 className={styles.errorTitle}>Сторінку не знайдено</h1>
        <p className={styles.errorDescription}>
          На жаль, ця новина втрачена в архівах або сторінка не існує.
          <br />
          Спробуйте повернутися на головну або скористайтеся пошуком.
        </p>

        {/* Action Buttons */}
        <div className={styles.errorActions}>
          <button className={styles.btnPrimary} onClick={() => navigate("/")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Головна сторінка
          </button>

          <button className={styles.btnSecondary} onClick={() => navigate(-1)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Назад
          </button>
        </div>

        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatItem} style={{ top: "10%", left: "10%" }}>
            📰
          </div>
          <div
            className={styles.floatItem}
            style={{ top: "20%", right: "15%" }}
          >
            📱
          </div>
          <div
            className={styles.floatItem}
            style={{ bottom: "15%", left: "15%" }}
          >
            🗞️
          </div>
          <div
            className={styles.floatItem}
            style={{ bottom: "20%", right: "10%" }}
          >
            📡
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
