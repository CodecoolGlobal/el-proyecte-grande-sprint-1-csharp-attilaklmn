import { useEffect, useState } from "react";
import FilterByScreening from "./FilterByScreening";

const ProgramList = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch("/list")
        .then((res) => res.json())
        .then((movieList) => setMovieList(movieList));
    }, []);

    return <div id="programList">{<FilterByScreening movieList={movieList}/>}</div>

};

export default ProgramList;