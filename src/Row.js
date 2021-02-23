import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css'

const baseURL = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    console.log(movies)

    return (
        <div className="row">
            <h1>
                {title}
            </h1>
            <div className="row__posters">
                {movies.map(movie => (<img src={`${baseURL}${movie.poster_path}`} alt={movie.name} className="row__poster"></img>))}

            </div>
        </div>
    )
}

export default Row;