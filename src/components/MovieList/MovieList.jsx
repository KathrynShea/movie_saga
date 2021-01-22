import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []); 

    return (
        <main>
            <h1>MovieList</h1>
            <section>
                {movies.map( movie => {
                    return <p key={movie.id}>{movie.title}</p>
                })}
            </section>
        </main>
        
    );
}

export default MovieList;