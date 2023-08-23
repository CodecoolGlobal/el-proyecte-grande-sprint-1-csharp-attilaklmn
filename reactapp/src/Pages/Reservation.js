import { Container, Paper } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import SeatGrid from "../Components/SeatGrid";
import { CookieContext, UserContext } from "../App";

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
    const { getCookie } = useContext(CookieContext)
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchRoom(roomId).then(room => {
            setRoom(room);
        }).then(() => fetchSeats(roomId)).then(seats => {
            setSeats(seats);
            setIsLoading(false);
        });;
    }, [])

    useEffect(() => {
      const userFromCookie = {}
      userFromCookie.name = JSON.parse(atob(getCookie("jwt_token").split(".")[1])).unique_name;
      userFromCookie.id = JSON.parse(atob(getCookie("jwt_token").split(".")[1])).nameid;
      setUser(userFromCookie);
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
        {!isLoading && !getCookie && <div>Please login for ticket reservation.</div>}
        {!isLoading && getCookie && <SeatGrid screeningId={screeningId} room={room} seats={seats} user={user} />}
      </Paper>
    </Container>
    )
}

export default Reservation;