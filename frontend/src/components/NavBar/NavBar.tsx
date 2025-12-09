import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { routes } from "../../router/routes";
import Logo from "../../assets/Logo.png";
import { SearchBar } from "../SearchBar";
import { navItems } from "../../constants/nav";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__logo}>
        <NavLink to={routes.home}>
          <img src={Logo} alt="News Logo" className={styles.navBar__logo} />
        </NavLink>
      </div>

      <SearchBar />

      <div className={styles.navBar__links}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navBar__links_link} ${
                isActive ? styles.navBar__links_link_active : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default React.memo(NavBar);
