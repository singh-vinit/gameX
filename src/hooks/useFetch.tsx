"use client";
import { useEffect, useState } from "react";

export function useFetch(name: string) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.rawg.io/api/${name}?key=fd9de0b1e991460c9c45169d797ae783`
      );
      const value = await response.json();
      console.log(value);
      setData(value);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { data, loading };
}
