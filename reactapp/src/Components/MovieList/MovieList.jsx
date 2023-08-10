import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieForm from "./MovieForm/MovieForm";
import { AdminContext } from "../../App";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  useEffect(() => {
    fetch("/list")
      .then((res) => res.json())
      .then((movieList) => setMovieList(movieList));
  }, []);

  return (
    <>
      {isAdmin && (
        <div id="movieForm">
          {<MovieForm movieList={movieList} setMovieList={setMovieList} />}
        </div>
      )}
      <div id="movieList">{<MovieCard movieList={movieList} />}</div>
    </>
  );
};

export default MovieList;
