import { useNavigate } from "react-router";
import MovieCover from "../MovieCover/MovieCover";

const Render = ({ moviesScreened, allScreenings }) => {
  const navigate = useNavigate();

  return moviesScreened.map((movie) => {
    return (
      <div className="ScreeningsForMovie" key={movie.id}>
        <div className="movieImg">
          <MovieCover movieTitle={movie.title.replace(" ", "+")} size="w200" />
        </div>
        <div className="title">{movie.title}</div>
        <div className="screeningTimes">
          {allScreenings
            .filter((screening) => screening.movieId === movie.id)
            .map((screening) => {
              return (
                <div
                  key={screening.id}
                  onClick={() => {
                    navigate(
                      `/reservation/${screening.id}/${screening.roomId}`
                    );
                  }}
                >
                  {screening.startingDate}
                </div>
              );
            })}
        </div>
      </div>
    );
  });
};

export default Render;
