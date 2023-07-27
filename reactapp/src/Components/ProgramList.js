import MovieCover from "./MovieCover";
import ScreeningById from "./ScreeningById";

const { useState, useEffect } = require("react");


const fetchMovies = () => fetch("/list").then(res => res.json())
const fetchIsThereScreening = (id) => fetch(`/isThereScreening/${id}`).then(res => res.json())


const ProgramList = () => {

    const[movieList, setMovieList] = useState([])
    const[condition, setCondition] = useState([])



    useEffect(() => {fetchMovies().then(movies => setMovieList(movies))}, [])

    

    return(
        <div id="Program">
        {movieList.map(x => {
            return(
            <div key={x.id} className="ScreeningsForMovie">
                <div className="movieImg">
                    <MovieCover movieTitle={x.title.replace(" ", "+")}/>
                </div>
                <div className="title">
                {x.title}
                </div>
                <div className="screeningTimes">
                    <ScreeningById id={x.id} />
                </div>
                </div>
                )
        })}
        </div>
    )
}

export default ProgramList;