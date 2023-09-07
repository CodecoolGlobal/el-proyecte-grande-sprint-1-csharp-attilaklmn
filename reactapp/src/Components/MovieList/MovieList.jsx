import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieForm from "./MovieForm/MovieForm";
import { AdminContext } from "../../App";
import { CookieContext } from "../../App";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { adminView } = useContext(AdminContext);
  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    fetch("/list")
      .then((res) => res.json())
      .then((movieList) => setMovieList(movieList));
  }, []);

  const handleDelete = (id) => {
    const jwtToken = getCookie("jwt_token");

    fetch(`/list`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((deletion) => {
        if (deletion) {
          setMovieList(movieList.filter(movie => movie.id !== id))
        }
      });
  };

  return (
    <>
      {adminView && (
        <div id="movieForm">
          {<MovieForm movieList={movieList} setMovieList={setMovieList} />}
        </div>
      )}
      <div id="movieList">{<MovieCard movieList={movieList} handleDelete={handleDelete}/>}</div>
    </>
  );
};

export default MovieList;
