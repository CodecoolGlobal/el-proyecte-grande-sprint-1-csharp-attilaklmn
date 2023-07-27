import { useEffect, useState } from "react";
import Seat from "./Seat";

const fetchReservedSeatIds = async (screeningId) => {
    const response = await fetch(`/reservation/screening/${screeningId}`);
    const data = response.json();
    return data;
}

const SeatGrid = ({ seats, screeningId }) => {
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
      for (let row in seats) {
        const seatRow = [];
        for (let col = 0; col < seats[row].length; col++) {
          const isReserved = data.includes(seats[row][col].id);
          const seat = (
            <Seat
              key={seats[row][col].id}
              isReserved={isReserved}
              seat={seats[row][col]}
              screeningId={screeningId}
              setIsLoading={e => setIsLoading(e)}
            />
          );

          seatRow.push(seat);
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