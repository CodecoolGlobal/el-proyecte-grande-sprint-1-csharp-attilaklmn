import { useEffect, useState } from "react";
import Render from "./Render";

const FilterByScreening = ({ movieList }) => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    fetch(`/Screening/all`)
      .then((res) => res.json())
      .then((screenings) => setScreenings(screenings));
  });

  return (
    <Render
      moviesScreened={movieList.filter((movie) =>
        screenings.some((screening) => screening.movieId === movie.id)
      )}
      allScreenings={screenings}
    />
  );
};

export default FilterByScreening;
