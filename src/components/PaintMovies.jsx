import React from "react";
import MoviesList from "./MoviesList";
import NotMovies from "./NotMovies";

function PaintMovies({ movies }) {
  return movies ? <MoviesList movies={movies} /> : <NotMovies />;
}

export default PaintMovies;
