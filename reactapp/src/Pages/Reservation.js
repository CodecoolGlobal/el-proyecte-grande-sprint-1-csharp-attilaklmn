import { Container, Paper } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import SeatGrid from "../Components/SeatGrid";

const fetchRoom = async (roomId) => {
    const response = await fetch(`/room/${roomId}`);
    const room = await response.json();
    return room;
}

const fetchSeats = async (roomId) => {
    const response = await fetch(`/room/${roomId}/seats`);
    const seats = await response.json();
    return seats;
}

const Reservation = () => {
    const { screeningId, roomId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [room, setRoom] = useState(null);
    const [seats, setSeats] = useState(null);

    useEffect(() => {
        fetchRoom(roomId).then(room => {
            setRoom(room);
        }).then(() => fetchSeats(roomId)).then(seats => {
            setSeats(seats);
            setIsLoading(false);
        });;
    }, [])

    return (
        <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          minWidth: "80%",
          minHeight: 200,
          margin: 3,
          display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        }}
        elevation={3}
      >
        {!isLoading && `Reservation of (Screening)${screeningId} in ${room.name}`}
        {isLoading && <p>Loading..</p>}
        {!isLoading && <SeatGrid screeningId={screeningId} seats={seats}/>}
      </Paper>
    </Container>
    )
}

export default Reservation;