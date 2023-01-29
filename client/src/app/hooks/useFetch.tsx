import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string): T | null => {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};
