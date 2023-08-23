import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CookieContext } from "../App";
import { Button } from "@mui/material";

const fetchReservedTickets = async (screeningId, userId, jwtToken) => {
    const response = await fetch(`/ticket/${screeningId}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        }
      });
    const data = response.json();
    return data;
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
    
    

    return (
        <div>Finalizing {screeningId}.
            {!isLoading && tickets.map(t => {
                return (<div>{t.id}</div>)
            })}
            <Button>Finalize</Button>
        </div>
    )
}

export default Finalize;