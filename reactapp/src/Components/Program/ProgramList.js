import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FilterByScreening from "./FilterByScreening";

const ProgramList = () => {
  const { movieId } = useParams();

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList([]);
    if (movieId) {
      fetch(`/list/${movieId}`)
        .then((res) => res.json())
        .then((movieList) => setMovieList(movieList));
    } else {
      fetch("/list")
        .then((res) => res.json())
        .then((movieList) => setMovieList(movieList));
    }
  }, [movieId]);

  return (
    <div id="programList">{<FilterByScreening movieList={movieList} movieId={movieId}/>}</div>
  );
};

export default ProgramList;
