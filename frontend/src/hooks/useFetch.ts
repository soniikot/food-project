import axios from "axios";
import { useState } from "react";

export interface Food {
  id: number;
  title: string;
  image: string;
  servings: number;
  summary: string;
  nutrition: {
    nutrients: {
      amount: number;
    }[];
  };
}

const useFetch = () => {
  const [data, setData] = useState<Food[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setError("Please enter a valid query");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const url = `http://localhost:3000/search?query=${encodeURIComponent(
        query
      )}`;
      const response = await axios.get(url);
      setData(response.data.results);
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while fetching recipes");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, handleSearch };
};

export default useFetch;
