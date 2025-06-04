import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://localhost:3000";

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

export interface RecentSearch {
  search_id: string;
  search_query: string;
  search_date: string;
}

export const useFetch = () => {
  const [data, setData] = useState<Food[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecentSearches = async () => {
    const url = `${BASE_URL}/recent-search`;
    try {
      const response = await axios.get(url);
      console.log("Recent searches response:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error fetching recent searches:", err);
      if (axios.isAxiosError(err)) {
        console.error("Error details:", {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
        });
      }
    }
  };

  const handleSearch = async (query: string) => {
    const url = `${BASE_URL}/search?query=${encodeURIComponent(query)}`;
    if (query.trim() === "") {
      setError("Please enter a valid query");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data.results);
      console.log(response.data.results);
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while fetching recipes");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    handleSearch,
    getRecentSearches,
  };
};
