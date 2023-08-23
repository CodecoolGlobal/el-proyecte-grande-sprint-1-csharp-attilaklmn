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
        if (!ticket) {
            setIsClicked(true);
            setIsLoading(true);
            reserveSeat(screeningId, seat.id, user.name, reRender);
        } else {
            alert("ticket unavailable")
        }
    }

    const setColor = (ticket, user) => {
        if (!ticket) {
            return "success";
        }
        if (ticket.userId == user.id) {
            return "secondary";
        } else {
            return "error"
        }
    }

    return (
        <Button sx={{
            height: 35,
            minWidth: 50,
            width: 50,
            margin: 0.1,
            cursor: ticket ? "not-allowed" : "pointer",
            fontSize: 12
            }}
            variant="contained" 
            color={setColor(ticket, user)} 
            onClick={clickHandler} 
            disabled={isClicked} >
                {seat.number}
        </Button>);
};

export default Seat;