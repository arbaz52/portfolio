import React from "react";

import axios from "axios";

export default function useAxios<T>(url: string): {
  loading: boolean;
  data?: T;
  error?: Error;
} {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
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
