import { useNavigate } from "react-router";
import MovieCover from "../MovieCover/MovieCover";
import { useState } from "react";

const Render = ({ moviesScreened, allScreenings }) => {

  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedDate = e.target.value;
    const selectedScreening = allScreenings.find(x => x.startingDate === selectedDate);

    if (selectedScreening) {
      const { id: screeningId, roomId } = selectedScreening;
      navigate(`/reservation/${screeningId}/${roomId}`);
    }
  };

  return moviesScreened.map((movie) => {
    return (
      <div className="ScreeningsForMovie" key={movie.id}>
        <div className="movieImg">
          <MovieCover movieTitle={movie.title.replace(" ", "+")} size="w200" />
        </div>
        <div className="title">{movie.title}</div>
        <div className="screeningTimes">
           <label htmlFor="screeningTimes">
              <select name='ScreeningTimes' defaultValue="" onChange={handleSelectChange}>
              <option value="" disabled>Select Screening Time</option>
                 {allScreenings
                  .filter((screening) => screening.movieId === movie.id)
                  .map((screening) => {
                    return (
                      <option key={screening.id} value={screening.startingDate}>
                        {`${screening.startingDate.split("T")[0]}  ${screening.startingDate.split("T")[1].replace(/(?<=\d{2}:\d{2}).{1,}/, "")}`}
                      </option>)})}
              </select>
            </label>
          </div>
        </div>
    );
  });
};

export default Render;
