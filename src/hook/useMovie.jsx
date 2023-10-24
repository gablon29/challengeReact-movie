import { useState } from "react";
import { searchMovie } from "../services/movies";

function useMovie({ query }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const newMovies = await searchMovie({ query });
    setMovies(newMovies);
  };

  return { movies, getMovies };
}

export default useMovie;
