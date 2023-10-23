import React from "react";
import moviesFile from "./utils/moviesFile.json";

function App() {
  const { Search } = moviesFile;

  const movies = Search.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));

  return (
    <div>
      <h1>Hola mundo</h1>
      <form>
        <input type="text" placeholder="Star war, Avenger, Minutos" />
        <button type="submit">Buscar</button>
      </form>
      {movies.map(({ id, title, image, year }) => (
        <ul key={id}>
          <li>{title}</li>
          <li>{year}</li>
          <li>
            <img src={image} alt="img-movie" />
          </li>
        </ul>
      ))}
    </div>
  );
}
export default App;
