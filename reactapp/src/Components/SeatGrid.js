import { useEffect, useState } from "react";
import Seat from "./Seat";

const fetchReservedSeatIds = async (screeningId) => {
    const response = await fetch(`/ticket/screening/${screeningId}`);
    const data = response.json();
    return data;
}

const SeatGrid = ({ seats, room, screeningId, user }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [seatGrid, setSeatGrid] = useState(null);

    useEffect(() => {
        fetchReservedSeatIds(screeningId).then((data) => {
            createTable(data)
            setIsLoading(false);
        });
    }, [isLoading])

    const createTable = (data) => {
      const seatGrid = [];
      const seatsToRender = [...seats];
      for (let row = 0; row < room.rowNumber; row++) {
        const seatRow = [];
        for (let col = 0; col < room.columnNumber; col++) {
          const seat = seatsToRender.shift();
          
          const isReserved = data.includes(seat.id);
          const seatComponent = (
            <Seat
              key={seat.id}
              isReserved={isReserved}
              seat={seat}
              screeningId={screeningId}
              setIsLoading={e => setIsLoading(e)}
              user={user}
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
      setSeatGrid(seatGrid);
    };

    
  
    return isLoading? <div>Loading..</div> : <div>{seatGrid}</div>;
  };
  
  export default SeatGrid;