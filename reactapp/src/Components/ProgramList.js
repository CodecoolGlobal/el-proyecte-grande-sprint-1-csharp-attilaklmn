const { useState, useEffect } = require("react");
const { default: ProgramTable } = require("../Components/ProgramTable");


const fetchPrograms = () => fetch("/allprogrammes").then(res => res.json())


const ProgramList = (props) => {

    const[program, setProgram] = useState([])


    useEffect(() => {
        fetchPrograms().then(programs => setProgram(programs));
    });

    return(
        <>
        <ProgramTable programs={program} />
        </>
    )
}

export default ProgramList;