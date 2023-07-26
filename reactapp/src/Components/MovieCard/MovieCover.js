import API_KEY from "../../config";

import React, { useEffect, useState } from "react";

const MovieCover = ({ movieTitle }) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((movieData) => {
      setLoading(false);
      setResponse(movieData.results[0].poster_path)});
  });

  return loading === false ? (<img src={"http://image.tmdb.org/t/p/w500" + response} alt="" />) : (<p>Image loading...</p>)
};

export default MovieCover;
