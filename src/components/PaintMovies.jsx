import React from "react";
import MoviesList from "./MoviesList";
import NotMovies from "./NotMovies";

function PaintMovies({ movies }) {
  const hasMovies = movies.length > 0;

  return hasMovies ? <MoviesList movies={movies} /> : <NotMovies />;
}

export default PaintMovies;
