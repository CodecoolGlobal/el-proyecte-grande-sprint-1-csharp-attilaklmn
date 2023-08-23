import React from "react";
import { Container, Paper } from "@mui/material";
import AccountCredentials from "../Components/User/AccountCredentials";

const Account = () => {
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
        <AccountCredentials></AccountCredentials>
      </Paper>
    </Container>
  );
};

export default Account;
