import moviesFile from "../utils/moviesFile.json";

function useMovie() {
  const { Search } = moviesFile;
  const MappedMovies = Search?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
  return { movies: MappedMovies };
}

export default useMovie;
