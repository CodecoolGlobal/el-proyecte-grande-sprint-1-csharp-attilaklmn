import { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieForm from "./MovieForm/MovieForm";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("/list")
      .then((res) => res.json())
      .then((movieList) => setMovieList(movieList));
  }, []);

  return (
    <>
      <div id="movieList">{<MovieCard movieList={movieList} />}</div>
      <div id="movieForm">{<MovieForm movieList={movieList} setMovieList={setMovieList} />}</div>
    </>
  );
};

export default MovieList;
