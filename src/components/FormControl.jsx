import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function FormControl({ getMovies }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(query);
  };

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = query === ""; // para saber que es la primera vez del
      return;
    }
    if (query === "") {
      setError("Debe escribir el nombre de la pelicula");
      return;
    }
    setError(null);
  }, [query]);

  return (
    <div>
      <h1>Busca tu pelicula</h1>
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
    </div>
  );
}

export default FormControl;
