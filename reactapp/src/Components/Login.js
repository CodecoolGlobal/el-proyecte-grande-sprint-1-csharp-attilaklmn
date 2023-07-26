import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = (props) => {
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
    fetchLogin();
  };

  const fetchLogin = async () => {
    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        if (response.status === 401) {
          setError(true);
          throw new Error("Unauthorized: Invalid username or password");
        } else {
          throw new Error(`HTTP error ${response.status}`);
        }
      }
      localStorage.setItem("cinemaSharpUser", username);
      window.location.reload(false);
      const data = await response.json();
      return data;
    } catch (error) {
      alert("Error fetching login process: ", error);
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
