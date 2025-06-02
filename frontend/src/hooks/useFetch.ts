import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (query: string) => {
  const url = `http://localhost:3000/search?query=${query}`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        res.data.content && setData(res.data.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
