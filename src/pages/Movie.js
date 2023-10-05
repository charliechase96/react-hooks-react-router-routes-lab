import { movies } from "../data";

function Movie() {
  return (
    <>
      <header>
        {<h1>Movies Page</h1>}
      </header>
      <main>
        {movies.map((movie) => {
          <div>
            {movie.title}
            {movie.time}
            <ul>
              <li>{movie.genres}</li>
            </ul>
          </div>
        })}
      </main>
    </>
  );
};

export default Movie;
