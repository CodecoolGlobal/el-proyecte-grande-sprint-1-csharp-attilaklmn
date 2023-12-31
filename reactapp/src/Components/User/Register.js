import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  checkEmailRegex,
  checkPasswordRegex,
  checkUsernameRegex,
  checkIfPasswordsMatch,
  handleFieldValueChange,
} from "../../Utilities/AccountUtils";
import CircularBackdrop from "../../Utilities/CircularBackdrop";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkFields()) {
      setIsLoading(true);
      await fetchRegister();
      setIsLoading(false);
    }
  };

  const fetchRegister = async () => {
    try {
      const response = await fetch("/user/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.Message);
      } else {
        alert("registered");
        window.location.reload(false);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const checkFields = () => {
    const usernameError = checkUsernameRegex(
      username,
      setUsernameError,
      setUsernameErrorText
    );
    const emailError = checkEmailRegex(email, setEmailError, setEmailErrorText);
    const passwordError = checkPasswordRegex(
      password,
      setPasswordError,
      setPasswordErrorText
    );
    const secondPasswordError = checkIfPasswordsMatch(
      password,
      secondPassword,
      setSecondPasswordError,
      setSecondPasswordErrorText
    );
    return usernameError && emailError && passwordError && secondPasswordError;
  };

  return (
    <div>
      Registration
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
          <TextField
            id="username"
            label="Username"
            type="username"
            value={username}
            onChange={(e) => handleFieldValueChange(e, setUsername)}
            error={usernameError}
            helperText={usernameError ? usernameErrorText : ""}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => handleFieldValueChange(e, setEmail)}
            error={emailError}
            helperText={emailError ? emailErrorText : ""}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => handleFieldValueChange(e, setPassword)}
            error={passwordError}
            helperText={passwordError ? passwordErrorText : ""}
          />
          <TextField
            id="secondPassword"
            label="Confirm Password"
            type="password"
            value={secondPassword}
            onChange={(e) => handleFieldValueChange(e, setSecondPassword)}
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
      <CircularBackdrop open={isLoading}></CircularBackdrop>
    </div>
  );
};

export default Register;
