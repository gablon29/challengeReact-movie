import useMovie from "./useMovie";

export async function useDataFetch(query) {
  const result = await fetch(
    `http://www.omdbapi.com/?apikey=28c50872&s=${query}`
  );
  const json = await result.json();
  const { movies } = useMovie(json);
  return { movies: movies };
}
