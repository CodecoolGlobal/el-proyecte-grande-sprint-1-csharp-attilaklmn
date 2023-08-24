import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "./Pages/Home";
import Filmlist from "./Pages/Filmlist";
import Program from "./Pages/Program";
import Reservation from "./Pages/Reservation";
import User from "./Pages/User";
import Account from "./Pages/Account";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
import Finalize from "./Pages/Finalize";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const AdminContext = createContext({
  isAdmin: false,
  adminView: false,
  setIsAdmin: () => {},
  setAdminView: () => {},
});

export const CookieContext = createContext({
  setCookie: () => {},
  getCookie: () => {},
  clearCookie: () => {},
});

function App() {
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminView, setAdminView] = useState(false);

  const setCookie = (name, value, hours) => {
    const expires = new Date(Date.now() + hours * 3600 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  };

  const clearCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  };

  useEffect(() => {
    const jwtToken = getCookie("jwt_token");
    if (jwtToken) {
      setUser(JSON.parse(atob(jwtToken.split(".")[1])).unique_name);
      setIsAdmin(
        JSON.parse(atob(jwtToken.split(".")[1])).role === "admin" ? true : false
      );
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CookieContext.Provider value={{ setCookie, getCookie, clearCookie }}>
          <UserContext.Provider value={{ user, setUser }}>
            <AdminContext.Provider
              value={{ isAdmin, setIsAdmin, adminView, setAdminView }}
            >
              <ResponsiveAppBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/filmlist" element={<Filmlist />} />
                <Route path="/program/:movieId?" element={<Program />} />
                <Route
                  path="/reservation/:screeningId/:roomId"
                  element={<Reservation />}
                />
                <Route path="/reservation/:screeningId/finalize" element={<Finalize />} />
                <Route path="/user" element={<User />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </AdminContext.Provider>
          </UserContext.Provider>
        </CookieContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
