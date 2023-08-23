import { useEffect, useState } from "react";
import Render from "./Render";

const FilterByScreening = ({ movieList, movieId }) => {
  const [screenings, setScreenings] = useState([]);

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

  return screenings.length > 0 ? (
    <Render
      moviesScreened={movieList.filter((movie) =>
        screenings.some((screening) => screening.movieId === movie.id)
      )}
      allScreenings={screenings}
    />
  ) : (
    <h1>There are no upcoming screenings.</h1>
  );
};

export default FilterByScreening;
