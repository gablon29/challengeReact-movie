import React from "react";
import PaintMovies from "./components/PaintMovies";
import useSearch from "./hook/useSearch";
import useMovie from "./hook/useMovie";

function App() {
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies } = useMovie({ query });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "green",
            }}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            type="text"
            placeholder="Star war, Avenger, Minutos"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <PaintMovies movies={movies} />
      </main>
    </div>
  );
}
export default App;
