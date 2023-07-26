import { useNavigate } from "react-router";

const { useState, useEffect } = require("react");
const { default: ProgramTable } = require("../Components/ProgramTable");


const fetchScreenings = () => fetch("/screening/all").then(res => res.json())


const ProgramList = (props) => {

    const[screeningList, setScreeningList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        fetchScreenings().then(screenings => setScreeningList(screenings));
    });

    return(
        <>
        {screeningList.map(e => {
            return (<div onClick={() => {
                navigate(`/reservation/${e.id}/${e.roomId}`)
            }}>{e.id}</div>);
        })}
        </>
    )
}

export default ProgramList;