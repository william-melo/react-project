import { useCallback, useRef, useState } from "react";
import { searchPictures } from "../services/pictures";

export function usePictures(search) {
  const [pictures, setPictures] = useState([]);
  const [errorPictures, setErrorPictures] = useState(null);
  const [loading, setLoading] = useState(false);

  const previousSearch = useRef(search);

  const getPictures = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return; // Avoid useless requests
    try {
      setLoading(true);
      setErrorPictures(false);
      previousSearch.current = search;
      const newPictures = await searchPictures({ search });
      setPictures(newPictures);
    } catch (e) {
      setErrorPictures(e.message);
    } finally {
      setLoading(false);
    }
  }, []);


  return { pictures, getPictures, loading, errorPictures };
}
