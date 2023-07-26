
const { useState, useEffect } = require("react");
const { default: ProgrammeTable } = require("../Components/ProgrammeTable");


const fetchProgrammes = () => fetch("/allprogrammes").then(res => res.json())


const ProgrammeList = (props) => {

    const[programme, setProgramme] = useState([])


    useEffect(() => {
        fetchProgrammes().then(programmes => setProgramme(programmes));
    });

    return(
        <>
        <ProgrammeTable programmes={programme} />
        </>
    )
}

export default ProgrammeList;