import styles from "./dropdown.module.css";
import clsx from "clsx";
import type { RecentSearch } from "../../hooks/useFetch";

interface DropdownProps {
  recentSearch: RecentSearch[];
  onClickToItem: (search: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  recentSearch,
  onClickToItem,
}) => {
  return (
    <div className={clsx(styles.dropdown, { [styles.hidden]: !recentSearch })}>
      {recentSearch.map((search) => (
        <div
          key={search.search_id}
          onClick={() => onClickToItem(search.search_query)}
          className={styles.dropdownItem}
        >
          {search.search_query}
        </div>
      ))}
    </div>
  );
};
