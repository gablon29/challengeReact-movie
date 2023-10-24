import { useState } from "react";
import moviesFile from "../utils/moviesFile.json";
import movieNotFount from "../utils/no-result.json";

function useMovie({ query }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const movies = responseMovies.Search;

  const MappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));

  const getMovies = () => {
    if (query) {
      // setResponseMovies(moviesFile);
      fetch(`http://www.omdbapi.com/?apikey=28c50872&s=${query}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        })
        .catch((err) => console.error(err));
    } else {
      setResponseMovies(movieNotFount);
    }
  };

  return { movies: MappedMovies, getMovies };
}

export default useMovie;
