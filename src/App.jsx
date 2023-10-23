import React from "react";
import moviesFile from "./utils/moviesFile.json";
import PaintMovies from "./components/PaintMovies";

function App() {
  const { Search } = moviesFile;

  return (
    <div>
      <h1>Busca tu pelicula</h1>
      <form>
        <input type="text" placeholder="Star war, Avenger, Minutos" />
        <button type="submit">Buscar</button>
      </form>
      <PaintMovies Search={Search} />
    </div>
  );
}
export default App;
