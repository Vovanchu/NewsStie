import { useState, useEffect } from "react";
import TopArrow from "../../assets/TopArrow.svg";
import styles from "./ScrollTop.module.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button className={styles.top_button} onClick={scrollToTop}>
          <img src={TopArrow} alt="Top Arrow" className={styles.top_arrow} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
