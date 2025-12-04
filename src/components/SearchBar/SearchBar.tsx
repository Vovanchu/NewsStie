import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { routes } from "../../router/routes";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      navigate(routes.home);
    } else {
      navigate(routes.search.replace(":query", value));
    }
  };

  useEffect(() => {
    const match = location.pathname.match(/\/search\/(.+)/);
    const newValue = match ? match[1] : "";

    if (newValue !== value) {
      const input = document.querySelector("input");
      if (input instanceof HTMLInputElement)
        input.placeholder = "Введіть запит...";
    }
  }, [location.pathname, value]);

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="Шукати..."
      />
      <button type="submit" className={styles.button}>
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
