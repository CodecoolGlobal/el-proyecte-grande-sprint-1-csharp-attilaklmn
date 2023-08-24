import { useNavigate } from "react-router";
import MovieCover from "../MovieCover/MovieCover";
import { useState } from "react";

const Render = ({ moviesScreened, allScreenings }) => {
  const navigate = useNavigate();
  const [dateChosen, setDateChosen] = useState(null)


  const formatDate = (startingDate) => {
    return startingDate.split("T")[0];
  }

  const formatTime = (startingDate) => {
    return startingDate.split("T")[1].substr(0,5);
  }

  const getUniqueDates = (movie) => {
    const uniqueDates = new Set();
    allScreenings.forEach(screening => {
      if(screening.movieId === movie.id){
        uniqueDates.add(formatDate(screening.startingDate))
      }
    })
    return Array.from(uniqueDates);
  }

  const handleSelectDateChange = (e) => {
    setDateChosen(e.target.value)
  }

  const handleSelectTimeChange = (e) => {
    console.log(e.target.value)
    const selectedScreeningId = e.target.value;
    const selectedScreening = allScreenings.find(x => x.id === parseInt(selectedScreeningId));
    console.log(selectedScreening)
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
        <div className="screeningDates">
           <label htmlFor="screeningDates">
              <select name='ScreeningDates' defaultValue="" onChange={handleSelectDateChange}>
              <option value="" disabled>Select Screening Date</option>
                 {getUniqueDates(movie)
                  .map((date) => {
                    return (
                      <option key={movie.id} value={date}>
                        {date}
                      </option>)})}
              </select>
            </label>
          </div>
          {dateChosen && 
          <div className="screeningTimes">
          <label htmlFor="screeningTimes">
             <select name='ScreeningTimes' defaultValue="" onChange={handleSelectTimeChange}>
             <option value="" disabled>Select Screening Time</option>
                {allScreenings
                 .filter((screening) => screening.movieId === movie.id && screening.startingDate.split("T")[0] === dateChosen)
                 .map((screening) => {
                   return (
                     <option key={screening.id} value={screening.id}>
                       {formatTime(screening.startingDate)}
                     </option>)})}
             </select>
           </label>
         </div>}
        </div>
    );
  });
};

export default Render;
