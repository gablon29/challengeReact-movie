import { useState } from "react";

function FormControl() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h1>Busca tu pelicula</h1>
      <form>
        <input
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          type="text"
          placeholder="Star war, Avenger, Minutos"
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default FormControl;
