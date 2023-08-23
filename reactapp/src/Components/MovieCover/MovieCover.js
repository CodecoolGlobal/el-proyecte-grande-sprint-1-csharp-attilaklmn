import API_KEY from "../../config";

import React, { useEffect, useState } from "react";

import w300 from "./defaultCover-w300.jpg";
import w200 from "./defaultCover-w200.jpg";

const MovieCover = ({ movieTitle, size }) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(w300);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((movieData) => {
        setLoading(false);
        if (movieData.results.length > 0) {
          setResponse(
            "http://image.tmdb.org/t/p/" +
              size +
              movieData.results[0].poster_path
          );
        } else if (size === "w200") {
          setResponse(w200);
        }
      });
  });

  return loading ? <p>Image loading...</p> : <img src={response} alt="" />;
};

export default MovieCover;
