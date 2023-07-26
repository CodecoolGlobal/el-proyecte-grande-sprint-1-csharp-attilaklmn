import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, Fragment } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const User = () => {
  const [choiceState, setChoiseState] = useState("initial");

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
        {choiceState === "initial" ? (
          <Fragment>
            <Button variant="contained" onClick={() => setChoiseState("login")}>
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
