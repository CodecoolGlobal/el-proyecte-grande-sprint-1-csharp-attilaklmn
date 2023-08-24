import { useNavigate } from "react-router";
import MovieCover from "../MovieCover/MovieCover";
import { useState } from "react";

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
          {"Screening Times:"}
          {allScreenings
            .filter((screening) => screening.movieId === movie.id)
            .map((screening) => {
              return (
                <div key={screening.id}>
                  <button onClick={() => {
                    navigate(
                      `/reservation/${screening.id}/${screening.roomId}`
                    );
                  }}>
                  {`${screening.startingDate.split("T")[0]}  ${screening.startingDate.split("T")[1].replace(/(?<=\d{2}:\d{2}).{1,}/, "")}`}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
};

export default Render;
