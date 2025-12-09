import React from "react";
import styles from "./NewsSkeleton.module.scss";

const NewsSkeleton: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <div className={`${styles.block} ${styles.pulsate}`}></div>
        <svg
          className={styles.fpo}
          width="84px"
          height="63px"
          viewBox="0 0 84 63"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            fillOpacity="0.06"
          >
            <g fill="#000000">
              <path d="M108.368088,36.5625 ... (скорочено) ..." />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.block2} ${styles.pulsate}`}></div>
        <div className={`${styles.block3} ${styles.pulsate}`}></div>
        <div className={`${styles.circle} ${styles.pulsate}`}></div>
      </div>
    </div>
  );
};

export default React.memo(NewsSkeleton);
