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
        body: JSON.stringify(ticketIds),
      });
    if (response.ok) {
        return true;
    } else {
        return false;
    }
}

const fetchPdfTicket = (userId, ticketId, jwtToken) => 
    fetch(`/ticket/finalize/download/${userId}/${ticketId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
        }
    }).then(res => res.blob());


const Finalize = () => {
    const { getCookie } = useContext(CookieContext)
    const { screeningId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState(null);
    const [isTicketFinale, setIsTicketFinal] = useState(false)

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
                setIsTicketFinal(true);
            } else {
                alert("something went wrong");
            }
        })
    }

    const handleDownload = () => {
        fetchPdfTicket(userId, tickets[0].id, jwtToken)
        .then(pdf => {
            const pdfUrl =  URL.createObjectURL(pdf);
            console.log(pdfUrl);
            const downloadLink = document.createElement("a");
            downloadLink.href = pdfUrl;
            downloadLink.download = "ticket.pdf";
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        })
    }
    

    return (
        <div>Finalizing {screeningId}.
            {!isLoading && tickets.map(t => {
                return (<div>{t.id}</div>)
            })}
            <Button onClick={handleFinalize}>Finalize</Button>
            {isTicketFinale && (
                <div className="download">
                    <button onClick={handleDownload}>Download Ticket</button>
                </div>
            )}
        </div>
    )
}

export default Finalize;