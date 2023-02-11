import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();

  //this pulls in the movie id from the url
  let { id } = useParams();
  id = Number(id);

  const history = useHistory();

  //pull in all movies from store
  const allMovies = useSelector((store) => store.movies);
  //filter through movies to find the one with matching id
  let movie = allMovies.find((item) => item.id === id);

  //pull in all genres from store
  const genres = useSelector((store) => store.genres);
  //filter through genres to find all the genres related to this movie id
  const genreList = genres.filter((item) => item.movie_id === id);
  //console.log("this is the list of genres for this movie", genreList);

  //on initial load, tell saga to get a genres from DB
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <img src={movie.poster} />
        <h3>Genres:</h3>
        <ul>
          {genreList.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <h4>{movie.description}</h4>
      </div>

      <button onClick={() => history.push("/")}>back to movies list</button>
    </>
  );
}

export default Details;
