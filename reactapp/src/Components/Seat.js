import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const reserveSeat = async (screeningId, seatId, user, reRender) => {
    const response = await fetch("/ticket/reserve", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            screeningId: screeningId,
            seatId: seatId,
            username: user
        })
    });
    if (response.status !== 200) {
        if (response.status === 400) {
            alert("Ticket already reserved.");
        }
    }
    reRender();
}

const Seat = ({seat, screeningId, isReserved, setIsLoading, user, reRender}) => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
    }, [isReserved])
    
    const clickHandler = () => {
        setIsClicked(true);
        setIsLoading(true);
        reserveSeat(screeningId, seat.id, user, reRender);
    }

    return (
        <Button sx={{
            height: 45,
            marginTop: 0.5,
            cursor: isReserved ? "not-allowed" : "pointer"
            }} 
            variant="contained" 
            color={isReserved ? "error" : "success"} 
            onClick={clickHandler} 
            disabled={isClicked} >
                {seat.row}-{seat.number}
        </Button>);
};

export default Seat;