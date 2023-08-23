import API_KEY from "../../config";

import React, { useEffect, useState } from "react";

const MovieCover = ({ movieTitle, size }) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

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
        } else {
          setResponse(process.env.PUBLIC_URL + `/DefaultCover/defaultCover-${size}.jpg`);
        }
      });
  }, []);

  return loading ? <p>Image loading...</p> : <img src={response} alt="" />;
};

export default MovieCover;
