import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CookieContext } from "../App";

const Login = (props) => {
  const { setCookie } = useContext(CookieContext);

  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin("/user/login");
  };

  const fetchLogin = async (URL) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.Message);
      } else {
        const data = await response.json();
        const token = data.token;
        console.log(token);
        console.log(JSON.parse(atob(token.split(".")[1])).role);
        setCookie("jwt_token", token, 1);
        window.location.reload();
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

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
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
              id="username"
              label="Username"
              type="username"
              value={username}
              onChange={handleUsernameChange}
              error={error}
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
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error}
            />
          </div>
        </div>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
      <Button variant="contained" onClick={() => props.onBackClick("initial")}>
        Back
      </Button>
    </div>
  );
};

export default Login;
