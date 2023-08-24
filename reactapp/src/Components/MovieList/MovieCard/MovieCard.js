import { useNavigate } from "react-router";
import MovieCover from "../../MovieCover/MovieCover";
import { Button } from "@mui/material";
import "./MovieCard.css";

const MovieCard = ({ movieList }) => {
  const navigate = useNavigate();

  return movieList.map((movie) => {
    return (
      <div className="movieCard" key={movie.id}>
        <div className="movieImg">
          <MovieCover movieTitle={movie.title.replace(" ", "+")} size="w300" />
        </div>
        <div className="movieDetails">
          <div className="movieTitle">{movie.title}</div>
          <div className="movieCast">
            {movie.cast.map((star, index) => {
              return <div key={movie.id + "-cast-" + index}>{star}</div>;
            })}
          </div>
          <div className="movieSummary">{movie.summary}</div>
          <div className="watchButton"><Button onClick={() => {
                    navigate(
                      `/program/${movie.id}`
                    );
                  }}>Buy Ticket</Button></div>
        </div>
      </div>
    );
  });
};

export default MovieCard;
