import { directors, movies } from "../data";

function Directors() {
  
  return (
    <>
      <header>
        {<h1>Directors Page</h1>}
      </header>
      <main>
        {directors.map((director) => {
          <div>
            {director.name}
            <ul>
              <li>{director.movies}</li>
            </ul>
          </div>
        })}
      </main>
    </>
  );
};

export default Directors;
