import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(()=> {
        fetch(url, {signal: abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from this resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((e) => {
        if(e.name === "AbortError") {
            console.log("fetch aborted")
        } else {
            setIsPending(false);
            setError(e.message);
        }
      });
      return () => abortCont.abort();
    }, 1000)
  }, [url]);
  return {data, isPending, error}
};