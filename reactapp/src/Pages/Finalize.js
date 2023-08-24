import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CookieContext } from "../App";
import { Button } from "@mui/material";

const fetchReservedTickets = async (screeningId, userId, jwtToken) => {
    const response = await fetch(`/ticket/${screeningId}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`
        }
      });
    const data = await response.json();
    return data;
}

const fetchToFinalizeTickets = async (tickets, userId, jwtToken) => {
    const ticketIds = tickets.map(t => t.id);
    console.log(JSON.stringify(ticketIds))
    const response = await fetch(`/ticket/finalize/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`
        }, 
        body: JSON.stringify(ticketIds)
      });
    if (response.ok) {
        return true;
    } else {
        return false;
    }
}


const Finalize = () => {
    const { getCookie } = useContext(CookieContext)
    const { screeningId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState(null);

    const jwtToken = getCookie("jwt_token");
    const userId = JSON.parse(atob(jwtToken.split(".")[1])).nameid;
    
    useEffect(() => {
        fetchReservedTickets(screeningId, userId, jwtToken).then(tickets => {
            console.log(tickets)
            setTickets(tickets);
            setIsLoading(false);
        })
    }, [])
    
    const handleFinalize = () => {
        fetchToFinalizeTickets(tickets, userId, jwtToken).then(success => {
            if (success) {
                alert("tickets finalized successfully");
            } else {
                alert("something went wrong");
            }
        })
    }
    

    return (
        <div>Finalizing {screeningId}.
            {!isLoading && tickets.map(t => {
                return (<div>{t.id}</div>)
            })}
            <Button onClick={handleFinalize}>Finalize</Button>
        </div>
    )
}

export default Finalize;