import "./App.css";
import { Search } from "./components/Search/Search";

export const App = () => {
  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <div className="container">
        <Search />
      </div>
    </div>
  );
};
