import { actors } from "../data";


function Actors() {
  return (
    <>
      <header>
        {<h1>Actors Page</h1>}
      </header>
      <main>
        {actors.map((actor) => {
          <div>
            {actor.name}
            <ul>
              <li>{actor.movies}</li>
            </ul>
          </div>
        })}
      </main>
    </>
  );
};

export default Actors;
