import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, Fragment, useContext, useEffect } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { UserContext } from "../App";
import { AdminContext } from "../App";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [choiceState, setChoiseState] = useState("initial");
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const handleLogout = (e) => {
    localStorage.clear();
    setUser();
    setIsAdmin(false);
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
          <Login onSuccessfulLogin={setUser} onBackClick={setChoiseState} />
        ) : null}
        {choiceState === "register" ? (
          <Register onBackClick={setChoiseState} />
        ) : null}
      </Paper>
    </Container>
  );
};

export default User;
