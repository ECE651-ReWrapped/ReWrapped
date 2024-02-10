import { useState, useEffect } from "react";

export const useAxios = (configObj) => {
  //Drestructure body
  //The requestData object is whatever we will be essential req.body for the backend
  const {
    axiosInstance,
    method,
    url,
    requestData = {},
    requestConfig = {},
  } = configObj;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setLoading(true);
        let res;
        if (["post", "put", "patch"].includes(method.toLowerCase())) {
          res = await axiosInstance[method.toLowerCase()](url, requestData, {
            ...requestConfig,
            signal,
          });
        } else {
          res = await axiosInstance[method.toLowerCase()](url, {
            ...requestConfig,
            signal,
          });
        }
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [reload]);

  return { response, error, loading, refetch };
};
