
const fetchIsSeatReserved = async (screeningId, seatId) => {
    const response = await fetch("/reservation/isseatreserved", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            screeningId: screeningId,
            seatId: seatId
        })
    });
    const data = await response.json();
    return data.reserved;
}

const reserveSeat = async (screeningId, seatId, user) => {
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
}

const Seat = ({seat, screeningId, isReserved, setIsLoading, user}) => {
    
  const seatStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: isReserved ? "red" : "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
  };
  const clickHandler = () => {
    reserveSeat(screeningId, seat.id, user);
    setIsLoading(true);
      }

  return (<div onClick={clickHandler} style={seatStyle}>{seat.row}-{seat.number}</div>);
};

export default Seat;