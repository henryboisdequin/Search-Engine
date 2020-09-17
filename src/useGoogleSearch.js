import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "51c0396bdd9b4af27";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
