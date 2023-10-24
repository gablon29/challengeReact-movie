export async function useDataFetch(query, cb) {
  return fetch(`http://www.omdbapi.com/?apikey=28c50872&s=${query}`)
    .then((resul) => resul.json())
    .then((json) => cb(json))
    .catch((err) => console.error(err));
}
