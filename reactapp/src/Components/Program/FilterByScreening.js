import { useEffect, useState, useContext } from "react";
import Render from "./Render";
import { AdminContext } from "../../App";

import ProgramForm from "./ProgramForm/ProgramForm";

const FilterByScreening = ({ movieList, movieId }) => {
  const [screenings, setScreenings] = useState([]);
  const { adminView } = useContext(AdminContext);

  useEffect(() => {
    setScreenings([]);
    if (movieId) {
      fetch(`/Screening/screeningByMovieId/${movieId}`)
        .then((res) => {
          return res.json();
        })
        .then((screenings) => setScreenings(screenings));
    } else {
      fetch(`/Screening/all`)
        .then((res) => res.json())
        .then((screenings) => setScreenings(screenings));
    }
  }, [movieId]);

  return (
    <>
      {adminView && (
        <div id="programForm">
          {<ProgramForm movieList={movieList} screenings={screenings} setScreenings={setScreenings} />}
        </div>
      )}
      {screenings.length > 0 ? (
        <Render
          moviesScreened={movieList.filter((movie) =>
            screenings.some((screening) => screening.movieId === movie.id)
          )}
          allScreenings={screenings}
        />
      ) : (
        <h1>There are no upcoming screenings.</h1>
      )}
    </>
  );
};

export default FilterByScreening;
