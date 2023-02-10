import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";





function Details (){
    const dispatch = useDispatch();

    let {id}  = useParams();
    id = Number(id);

    const history = useHistory();

    const allMovies = useSelector(store => store.movies);
    let movie = allMovies.find(item => item.id === id)

    const genres = useSelector(store => store.genres);
    const genreList = genres.filter(item => item.movie_id === id);
    console.log("this is the list of genres for this movie", genreList);

    useEffect(() =>{
        dispatch({ type: 'FETCH_GENRES' });
    },[])
    
    

    

    return (<>
   
    <div>
        <h2>{movie.title}</h2>
        <img src={movie.poster} />
        <h3>Genres:</h3>
        <ul>
            {genreList.map((item) => <li>{item.name}</li>)}
        </ul>
        <h4>{movie.description}</h4>
        
    </div>

    <button onClick={() => history.push('/')}>back to movies list</button></>);
}

export default Details;