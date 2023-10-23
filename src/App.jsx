import React from "react";
import PaintMovies from "./components/PaintMovies";
import useMovie from "./hook/useMovie";
import FormControl from "./components/FormControl";

function App() {
  const { movies } = useMovie();

  return (
    <div>
      <header>
        <FormControl />
      </header>
      <main>
        <PaintMovies movies={movies} />
      </main>
    </div>
  );
}
export default App;
