import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { useFetch, type RecentSearch } from "../../hooks/useFetch";
import { RecipeCardPreview } from "../RecipeCard/RecipeCardPreview";
import { Dropdown } from "../Dropdown/Dropdown";

export const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error, handleSearch, getRecentSearches } = useFetch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearch, setRecentSearch] = useState<RecentSearch[]>([]);

  useEffect(() => {
    const fetchRecentSearch = async () => {
      const recentSearch = await getRecentSearches();
      setRecentSearch(recentSearch);
    };
    fetchRecentSearch();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSearch(query);
    const recentSearch = await getRecentSearches();
    setRecentSearch(recentSearch);
  };

  return (
    <>
      <form className={styles.searchContainer} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
        {showDropdown && (
          <Dropdown
            recentSearch={recentSearch}
            onClickToItem={(search) => {
              setQuery(search);
              setShowDropdown(false);
            }}
          />
        )}

        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className={styles.results}>
        {data &&
          data.map((recipe) => (
            <RecipeCardPreview key={recipe.id} food={recipe} />
          ))}
      </div>
    </>
  );
};
