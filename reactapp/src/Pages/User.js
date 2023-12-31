import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, Fragment, useContext, useEffect } from "react";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import { AdminContext, CookieContext, UserContext } from "../App";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const { setIsAdmin, setAdminView } = useContext(AdminContext);
  const { clearCookie } = useContext(CookieContext);
  const [choiceState, setChoiseState] = useState("initial");

  const handleLogout = (e) => {
    setUser();
    setIsAdmin(false);
    setAdminView(false);
    clearCookie("jwt_token");
  };

  useEffect(() => {
    setChoiseState("initial");
  }, [user]);

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
        }}
        elevation={3}
      >
        {!user && (
          <Fragment>
            {choiceState === "initial" ? (
              <Fragment>
                <Button
                  variant="contained"
                  onClick={() => setChoiseState("login")}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setChoiseState("register")}
                >
                  Register
                </Button>
              </Fragment>
            ) : null}
          </Fragment>
        )}
        {user && (
          <Button variant="contained" onClick={() => handleLogout()}>
            Logout
          </Button>
        )}
        {choiceState === "login" ? (
          <Login onBackClick={setChoiseState} />
        ) : null}
        {choiceState === "register" ? (
          <Register onBackClick={setChoiseState} />
        ) : null}
      </Paper>
    </Container>
  );
};

export default User;
