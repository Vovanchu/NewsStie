import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Test News</h2>
          <p>Making life easier since 2023</p>
        </div>

        <div className={styles.social}>
          <a href="#" className={styles.facebook}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.twitter}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.instagram}>
            <FaInstagram />
          </a>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Test News. <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
