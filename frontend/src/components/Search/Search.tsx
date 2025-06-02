import styles from "./Search.module.css";
import apiCall from "../../hooks/useFetch";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <form className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" onClick={() => apiCall(query)}>
          Search
        </button>
      </form>
      <div className={styles.results}>{"data"}</div>
    </>
  );
};

export default Search;
