import { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch("/list")
        .then((res) => res.json())
        .then((movieList) => setMovieList(movieList));
    }, []);

    return <div id="movieList">{<MovieCard movieList={movieList}/>}</div>

};

export default MovieList;