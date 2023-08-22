import { useContext } from "react";
import { CookieContext } from "../../../App";
import "./MovieForm.css";

const MovieForm = ({ movieList, setMovieList }) => {
  const { getCookie } = useContext(CookieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const movieData = {
      title: "",
      cast: [],
      summary: "",
    };

    for (const entry of formData.entries()) {
      if (entry[0] === "title") {
        movieData.title = entry[1];
      }
      if (entry[0] === "cast") {
        movieData.cast = entry[1].split(", ");
      }
      if (entry[0] === "summary") {
        movieData.summary = entry[1];
      }
    }

    const jwtToken = getCookie("jwt_token");

    fetch(`/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((movie) => setMovieList([...movieList, movie]));

    document.getElementById("movie-form").reset();
  };

  return (
    <>
      <div className="form-container">
        <div className="movie-details">
          <form id="movie-form" onSubmit={handleSubmit}>
            <div className="movie-form-row">
              <span className="movie-form-label">Title: </span>
              <input className="movie-form-input" name="title" />
            </div>
            <div className="movie-form-row">
              <span className="movie-form-label">Cast: </span>
              <input className="movie-form-input" name="cast" />
            </div>
            <div className="movie-form-row">
              <span className="movie-form-label">Summary: </span>
              <input className="movie-form-input" name="summary" />
            </div>
            <div className="button-row">
              <button className="save-button" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieForm;
