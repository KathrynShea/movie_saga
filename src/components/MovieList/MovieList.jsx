import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  //pulls in all movies from store
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    //on initial load, this tells saga to get all movies from DB
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleClick = (movie_id) => {
    //console.log("im in the handleClick! this is the movie id", movie_id);
    //on click we a pushed to the details view for that specific movie id.
    history.push(`/details/${movie_id}`);
  };

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id} onClick={() => handleClick(movie.id)}>
              <h4 class="movie_title">{movie.title}</h4>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
