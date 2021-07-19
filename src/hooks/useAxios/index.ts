import { useState, useEffect } from "react";

import axios from "axios";

export default function useAxios<T>(url: string): {
  loading: boolean;
  data?: T;
  error?: Error;
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get<T>(url)
      .catch((ex) => {
        setError(ex);
      })
      .then((res) => {
        if (!res) {
          setData(undefined);
          return;
        }
        const { data } = res;
        setData(data);

        return res;
      })
      .finally(() => {
        setLoading(false);
      });

    setLoading(true);
    setData(undefined);
    setError(undefined);
  }, [url]);

  return { data, loading, error };
}
