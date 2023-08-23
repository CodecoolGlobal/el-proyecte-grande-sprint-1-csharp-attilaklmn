import { useEffect, useState } from "react";
import Seat from "./Seat";

const fetchReservedTickets = async (screeningId) => {
    const response = await fetch(`/ticket/screening/${screeningId}`);
    const data = response.json();
    return data;
}

const SeatGrid = ({ seats, room, screeningId, user }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [seatGrid, setSeatGrid] = useState(null);

    useEffect(() => {
        fetchReservedTickets(screeningId).then((data) => {
            createTable(data)
            setIsLoading(false);
        });
    }, [])

    const reRender = () => {
      fetchReservedTickets(screeningId).then((tickets) => {
        createTable(tickets)
    });
    }

    const createTable = (tickets) => {
      const seatGrid = [];
      const seatsToRender = [...seats];
      for (let row = 0; row < room.rowNumber; row++) {
        const seatRow = [];
        for (let col = 0; col < room.columnNumber; col++) {
          const seat = seatsToRender.shift();
          const ticket = tickets.find(t => t.seatId == seat.id);
          const seatComponent = (
            <Seat
              key={seat.id}
              seat={seat}
              screeningId={screeningId}
              setIsLoading={e => setIsLoading(e)}
              user={user}
              reRender={reRender}
              ticket={ticket}
            />
          );

          seatRow.push(seatComponent);
        }

        seatGrid.push(
          <div key={row} style={{ display: "flex" }}>
            {seatRow}
          </div>
        );
      }
      setIsLoading(false);
      setSeatGrid(seatGrid);
    };

    
  
    return <div>{seatGrid}</div>;
  };
  
  export default SeatGrid;