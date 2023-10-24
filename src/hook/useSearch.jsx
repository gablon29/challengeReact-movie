import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

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
  return { query, setQuery, error };
}

export default useSearch;
