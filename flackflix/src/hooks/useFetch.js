import { useState, useEffect } from "react";

// useFetch is a custom hook used for fetching data from an external api when a component renders.

// It takes a url and a dependency array as parameters. When the component renders, useFetch will
// make a GET request to the given url. It will make another GET request whenever an item in the dependency
// array changes.

// useFetch returns a loading boolean, the data from the API, and an error boolean.

export const useFetch = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    // fix react-router scroll bug, automatically scroll to top of page
    window.scrollTo(0, 0);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(movieData => {
        setLoading(false);
        // console.log(movieData);
        setData(movieData);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line
  }, dependencies);

  return [isLoading, data, error];
};
