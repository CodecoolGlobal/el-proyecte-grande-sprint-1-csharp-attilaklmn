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

const Seat = ({seat, screeningId, setIsLoading, user, reRender, ticket}) => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
    }, [ticket])
    
    const clickHandler = () => {
        setIsClicked(true);
        setIsLoading(true);
        reserveSeat(screeningId, seat.id, user.name, reRender);
    }

    const setColor = (ticket, user) => {
        if (!ticket) {
            return "success";
        }
        if (ticket.userId == user.id) {
            return "primary";
        } else {
            return "error"
        }
    }

    return (
        <Button sx={{
            height: 45,
            marginTop: 0.5,
            cursor: ticket ? "not-allowed" : "pointer"
            }}
            variant="contained" 
            color={setColor(ticket, user)} 
            onClick={clickHandler} 
            disabled={isClicked} >
                {seat.row}-{seat.number}
        </Button>);
};

export default Seat;