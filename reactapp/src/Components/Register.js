import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [secondPasswordError, setSecondPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const emailValidatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const notValidFormatText = "Not valid format!";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkFields()) {
      alert("Registered");
    } else {
      alert("error");
    }
  };

  const checkFields = () => {
    return checkEmail();
  };

  const checkEmail = () => {
    if (emailValidatorRegex.test(email)) {
      return true;
    } else {
      setEmailError(true);
      setEmailErrorText(notValidFormatText);
      return false;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailValidatorRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
      setEmailErrorText(notValidFormatText);
    }
  };

  return (
    <div>
      Register
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Password
          <TextField
            id="username"
            label="Username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError}
            helperText={usernameError ? "Incorrect Username!" : ""}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? emailErrorText : ""}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError ? "Incorrect password!" : ""}
          />
          <TextField
            id="secondPassword"
            label="Confirm Password"
            type="password"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
            error={secondPasswordError}
            helperText={secondPasswordError ? "Incorrect second password!" : ""}
          />
        </div>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
      <Button variant="contained" onClick={() => props.onBackClick("initial")}>
        Back
      </Button>
    </div>
  );
};

export default Register;
