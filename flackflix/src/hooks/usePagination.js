import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const increment = () => {
    setPage(page + 1);
  };
  const decrement = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return [page, increment, decrement];
};
