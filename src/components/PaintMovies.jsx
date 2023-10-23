import React from "react";
import MoviesList from "./MoviesList";
import NotMovies from "./NotMovies";

function PaintMovies({ Search }) {
  const hasMovies = Search.length > 0;
  const movies = hasMovies
    ? Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
      }))
    : [];

  return hasMovies ? <MoviesList movies={movies} /> : <NotMovies />;
}

export default PaintMovies;
