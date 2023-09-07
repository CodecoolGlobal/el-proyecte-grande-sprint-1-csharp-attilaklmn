import { useContext } from "react";
import { useNavigate } from "react-router";
import MovieCover from "../../MovieCover/MovieCover";
import { AdminContext } from "../../../App";
import { Button } from "@mui/material";
import "./MovieCard.css";
import UpdateForm from "../UpdateForm";

const MovieCard = ({
  movieList,
  handleDelete,
  editMode,
  toggleEditMode,
  updateText,
  handleUpdate
}) => {
  const { adminView } = useContext(AdminContext);
  const navigate = useNavigate();

  return movieList
    .sort((a, b) => {
      const articles = ["a", "an", "the"];

      const getTitleWithoutArticles = (title) => {
        const splitTitle = title.split(" ");

        if (articles.includes(splitTitle[0].toLowerCase())) {
          return splitTitle.slice(1).join(" ");
        }

        return title;
      };

      const titleA = getTitleWithoutArticles(a.title.toLowerCase());
      const titleB = getTitleWithoutArticles(b.title.toLowerCase());

      return titleA.localeCompare(titleB);
    })
    .map((movie) => {
      return (
        <div className="movieCard" key={movie.id}>
          <div className="movieImg">
            <MovieCover
              movieTitle={movie.title.replace(" ", "+")}
              size="w300"
            />
          </div>
          <div className="movieDetails">
            {editMode[movie.id] ? (
              <UpdateForm movie={movie} toggleEditMode={toggleEditMode} handleUpdate={handleUpdate}/>
            ) : (
              <>
                <div className="movieTitle">{movie.title}</div>
                <div className="movieCast">
                  {movie.cast.map((star, index) => {
                    return <div key={movie.id + "-cast-" + index}>{star}</div>;
                  })}
                </div>
                <div className="movieSummary">{movie.summary}</div>
                <div className="watchButton">
                  <Button
                    onClick={() => {
                      navigate(`/program/${movie.id}`);
                    }}
                  >
                    Buy Ticket
                  </Button>
                </div>
              </>
            )}
            {adminView && (
              <div className="updateButtons">
                <div className="editButton">
                  <Button
                    variant="contained"
                    onClick={() => toggleEditMode(movie.id)}
                  >
                    {updateText[movie.id] || "Edit"}
                  </Button>
                </div>
                <div className="deleteButton">
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(movie.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
};

export default MovieCard;
