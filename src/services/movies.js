const API_KEY = "28c50872";
export const searchMovie = async ({ query }) => {
  if (query === "") return null;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const json = await response.json();
    const movies = json.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Not movie found");
  }
};
