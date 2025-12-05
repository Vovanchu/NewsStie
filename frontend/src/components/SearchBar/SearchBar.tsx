import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { routes } from "../../router/routes";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      navigate(routes.home);
    } else {
      navigate(routes.search.replace(":query", value));
    }

    setValue("");
  };

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
