import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const ScreeningById = (props) => {
    
    const[screenings, setScreenings] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/screeningByMovieId/${props.id}`).then(res => res.json()).then(screenings => setScreenings(screenings));
    }, [props.id]);

    console.log(props.id)

    return(
        screenings.length > 0 &&
            screenings.map(x => {
                return(
                    <div onClick={() => {
                        navigate(`/reservation/${x.id}/${x.roomId}`)
                    }}>{x.startingDate}
                    </div>
                )
            })
    )
}

export default ScreeningById