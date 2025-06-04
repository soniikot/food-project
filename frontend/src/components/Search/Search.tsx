import styles from "./Search.module.css";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error, handleSearch } = useFetch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <>
      <form className={styles.searchContainer} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className={styles.results}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data &&
          data.map((recipe) => (
            <RecipeCard key={recipe.id} food={recipe} onClick={() => {}} />
          ))}
      </div>
    </>
  );
};
