function MoviesList({ movies }) {
  return (
    <>
      {movies?.map(({ id, title, image, year }) => (
        <ul key={id}>
          <li>{title}</li>
          <li>{year}</li>
          <img src={image} alt="img-movie" />
        </ul>
      ))}
    </>
  );
}
export default MoviesList;
