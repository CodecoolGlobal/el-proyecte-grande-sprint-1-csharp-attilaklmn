import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard/MovieCard";
import MovieForm from "./MovieForm/MovieForm";
import { AdminContext } from "../../App";
import { CookieContext } from "../../App";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [updateText, setUpdateText] = useState({});
  const { adminView } = useContext(AdminContext);
  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    handleUpdate();
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
          setMovieList(movieList.filter((movie) => movie.id !== id));
        }
      });
  };

  const toggleEditMode = (movieId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [movieId]: !prevEditMode[movieId],
    }));
    setUpdateText((prevTexts) => ({
      ...prevTexts,
      [movieId]: prevTexts[movieId] === "Edit" ? "Cancel" : "Edit",
    }));
  };

  const handleUpdate = () => {
    fetch("/list")
      .then((res) => res.json())
      .then((movies) => {
        setMovieList(movies);
        const initialButtonTexts = {};
        movies.forEach((movie) => {
          initialButtonTexts[movie.id] = "Edit";
        });
        setUpdateText(initialButtonTexts);
      });
  };

  return (
    <>
      {adminView && (
        <div id="movieForm">
          {<MovieForm movieList={movieList} setMovieList={setMovieList} />}
        </div>
      )}
      <div id="movieList">
        {
          <MovieCard
            movieList={movieList}
            handleDelete={handleDelete}
            editMode={editMode}
            toggleEditMode={toggleEditMode}
            updateText={updateText}
            handleUpdate={handleUpdate}
          />
        }
      </div>
    </>
  );
};

export default MovieList;
