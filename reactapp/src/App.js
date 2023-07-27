import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "./Pages/Home";
import Filmlist from "./Pages/Filmlist";
import Program from "./Pages/Program";
import Reservation from "./Pages/Reservation";
import User from "./Pages/User";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("cinemaSharpUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/filmlist" element={<Filmlist />} />
            <Route path="/program" element={<Program />} />
            <Route
              path="/reservation/:screeningId/:roomId"
              element={<Reservation />}
            />
            <Route path="/user" element={<User />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
