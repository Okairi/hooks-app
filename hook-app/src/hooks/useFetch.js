import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const fetchData = async () => {
    setState({ ...state, isLoading: true });
    const response = await fetch(url);
    const data = await response.json();
    setState({
      data,
      isloading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { ...state };
};
