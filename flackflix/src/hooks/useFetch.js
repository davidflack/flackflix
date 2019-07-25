import { useState, useEffect } from "react";

export const useFetch = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(movieData => {
        setLoading(false);
        console.log(movieData);
        setData(movieData);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, dependencies);

  return [isLoading, data];
};
