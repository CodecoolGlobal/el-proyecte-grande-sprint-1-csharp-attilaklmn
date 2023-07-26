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
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [secondPasswordErrorText, setSecondPasswordErrorText] = useState("");
  const [usernameErrorText, setUsernameErrorText] = useState("");

  const emailValidatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordValidatorRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const notValidFormatText = "Not valid format!";
  const notValidPasswordFormatText =
    "Password must contain at least 6 characters, upper and lower case letters and a number";
  const notMatchingPasswordsText = "The passwords must match!";
  const minimumUsernameLength = 4;
  const notLongEnoughUserNameText =
    "The username must be at least " +
    minimumUsernameLength +
    " characters long!";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkFields()) {
      alert("Registered");
    } else {
      alert("error");
    }
  };

  const checkFields = () => {};

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (emailValidatorRegex.test(newEmail)) {
      setEmailError(false);
    } else {
      setEmailError(true);
      setEmailErrorText(notValidFormatText);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (passwordValidatorRegex.test(newPassword)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordErrorText(notValidPasswordFormatText);
    }
    checkIfPasswordsMatch(newPassword, secondPassword);
  };

  const handleSecondPasswordChange = (e) => {
    const newPassword = e.target.value;
    setSecondPassword(newPassword);
    checkIfPasswordsMatch(newPassword, password);
  };

  const checkIfPasswordsMatch = (password, secondPassword) => {
    if (password !== secondPassword) {
      setSecondPasswordError(true);
      setSecondPasswordErrorText(notMatchingPasswordsText);
    } else {
      setSecondPasswordError(false);
    }
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    if (newUsername.length < minimumUsernameLength) {
      setUsernameError(true);
      setUsernameErrorText(notLongEnoughUserNameText);
    } else {
      setUsernameError(false);
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
            onChange={handleUsernameChange}
            error={usernameError}
            helperText={usernameError ? usernameErrorText : ""}
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
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? passwordErrorText : ""}
          />
          <TextField
            id="secondPassword"
            label="Confirm Password"
            type="password"
            value={secondPassword}
            onChange={handleSecondPasswordChange}
            error={secondPasswordError}
            helperText={secondPasswordError ? secondPasswordErrorText : ""}
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
