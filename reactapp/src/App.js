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

export const AdminContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
});

function App() {
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("cinemaSharpUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            <ResponsiveAppBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/filmlist" element={<Filmlist />} />
              <Route path="/program/:movieId?" element={<Program />} />
              <Route
                path="/reservation/:screeningId/:roomId"
                element={<Reservation />}
              />
              <Route path="/user" element={<User />} />
            </Routes>
          </AdminContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
