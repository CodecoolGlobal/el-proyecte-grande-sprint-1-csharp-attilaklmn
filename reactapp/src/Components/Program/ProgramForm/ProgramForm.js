import { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../../App";
import { Button } from "@mui/material";
import Select from "react-select";
import dayjs from "dayjs";

const ProgramForm = ({ movieList, screenings, setScreenings }) => {
  const startDate = new Date(dayjs().add(4, "hour").format("YYYY-MM-DDTHH:mm"))
    .toISOString()
    .split(".")[0];

  const [movies, setMovies] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [date, setDate] = useState(startDate);
  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    if (movieList.length > 0) {
      const movieOptions = movieList.map((movie) => ({
        label: movie.title,
        value: movie.id,
      }));
      setMovies(movieOptions);
    }
  }, [movieList]);

  useEffect(() => {
    fetch(`/Room/all`)
      .then((res) => res.json())
      .then((roomList) => {
        const roomOptions = roomList.map((room) => ({
          label: room.name,
          value: room.id,
        }));
        setRooms(roomOptions);
      });
  }, []);

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const programData = {
      movieId: "",
      roomId: "",
      startingDate: dayjs(date).format("YYYY-MM-DDTHH:mm") + ":00.000Z",
    };

    for (const entry of formData.entries()) {
      if (entry[0] === "movieId") {
        programData.movieId = entry[1];
      }
      if (entry[0] === "roomId") {
        programData.roomId = entry[1];
      }
    }

    const jwtToken = getCookie("jwt_token");

    fetch(`/Screening`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(programData),
    })
      .then((res) => res.json())
      .then((screening) => setScreenings([...screenings, screening]));
  };

  return (
    <>
      <div className="form-container">
        <div className="program-details">
          <form id="program-form" onSubmit={handleSubmit}>
            <div className="program-form-row">
              <span className="program-form-label">Movie: </span>
              {movies.length > 0 && (
                <Select
                  options={movies}
                  name="movieId"
                  placeholder="Select a movie"
                />
              )}
            </div>
            <div className="program-form-row">
              <span className="program-form-label">Room: </span>
              {rooms.length > 0 && (
                <Select
                  options={rooms}
                  name="roomId"
                  placeholder="Select a room"
                />
              )}
            </div>
            <div className="program-form-row">
              <span className="program-form-label">Date: </span>
              <input
                type="datetime-local"
                min={startDate}
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="button-row">
              <Button className="save-button" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProgramForm;
