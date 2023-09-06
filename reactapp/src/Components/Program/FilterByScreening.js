import { useEffect, useState, useContext } from "react";
import Render from "./Render";
import { CookieContext } from "../../App";
import { AdminContext } from "../../App";
import Button from "@mui/material/Button";

import ProgramForm from "./ProgramForm/ProgramForm";

const FilterByScreening = ({ movieList, movieId }) => {
  const [screenings, setScreenings] = useState([]);
  const [outdatedScreenings, setOutdatedScreenings] = useState([]);
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);
  const { adminView } = useContext(AdminContext);
  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    setScreenings([]);
    if (movieId) {
      fetch(`/Screening/screeningByMovieId/${movieId}`)
        .then((res) => {
          return res.json();
        })
        .then((screenings) => setScreenings(screenings));
    } else {
      fetch(`/Screening/all`)
        .then((res) => res.json())
        .then((allScreenings) => {
          let outdatedArray = [];
          let upcomingArray = [];

          allScreenings.forEach((screening) => {
            if (new Date(screening.startingDate) < new Date()) {
              outdatedArray.push(screening.id);
            } else {
              upcomingArray.push(screening);
            }
          });

          setOutdatedScreenings(outdatedArray);
          setScreenings(upcomingArray);
        });
    }
  }, [movieId]);

  const handleRequest = (e) => {
    const jwtToken = getCookie("jwt_token");

    fetch(`/Screening`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(outdatedScreenings),
    })
      .then((res) => res.json())
      .then((deletion) => {
        setDeleteSuccessful(deletion);
        setOutdatedScreenings([]);
      });
  };

  console.log(outdatedScreenings);
  console.log(screenings);

  return (
    <>
      {adminView && (
        <>
          <div id="programForm">
            {
              <ProgramForm
                movieList={movieList}
                screenings={screenings}
                setScreenings={setScreenings}
              />
            }
          </div>
          <div id="deleteOutdated">
            <div id="deleteNotif">
              <h3>
                There is/are {outdatedScreenings.length} outdated screening(s).
              </h3>
            </div>
            {!deleteSuccessful && outdatedScreenings.length > 0 && (
              <div id="deleteButton">
                <Button variant="contained" onClick={() => handleRequest()}>
                  Delete
                </Button>
              </div>
            )}
            {deleteSuccessful && (
              <div id="deleteMsg">
                <h4>Screening(s) deleted successfully.</h4>
              </div>
            )}
          </div>
        </>
      )}
      {screenings.length > 0 ? (
        <Render
          moviesScreened={movieList.filter((movie) =>
            screenings.some((screening) => screening.movieId === movie.id)
          )}
          allScreenings={screenings}
        />
      ) : (
        <h1>There are no upcoming screenings.</h1>
      )}
    </>
  );
};

export default FilterByScreening;
