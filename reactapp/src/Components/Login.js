import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div>
      Login
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Username
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Username"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Password
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Password"
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Login;
