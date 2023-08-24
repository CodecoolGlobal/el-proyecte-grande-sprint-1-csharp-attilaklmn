import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import {
  checkEmailRegex,
  checkPasswordRegex,
  checkIfPasswordsMatch,
  handleFieldValueChange,
} from "../../Utilities/AccountUtils";
import DialogPopUp from "../../Utilities/DialogPopUp";
import { CookieContext } from "../../App";
import CircularBackdrop from "../../Utilities/CircularBackdrop";

const AccountCredentials = () => {
  const { getCookie } = useContext(CookieContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [secondPasswordError, setSecondPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [secondPasswordErrorText, setSecondPasswordErrorText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fetchFunction, setFetchFunction] = useState();

  const [isLoading, setIsLoading] = useState(false);

  let jwtToken = getCookie("jwt_token");

  const handleEmailChangeSubmit = () => {
    if (checkEmailRegex(email, setEmailError, setEmailErrorText)) {
      jwtToken = getCookie("jwt_token");
      setFetchFunction(() => fetchEmailChange);
      handleClickOpen(true);
    }
  };

  const handlePasswordChangeSubmit = () => {
    if (
      checkPasswordRegex(password, setPasswordError, setPasswordErrorText) &&
      checkIfPasswordsMatch(
        password,
        secondPassword,
        setSecondPasswordError,
        setSecondPasswordErrorText
      )
    ) {
      jwtToken = getCookie("jwt_token");
      setFetchFunction(() => fetchPasswordChange);
      handleClickOpen(true);
    }
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setConfirmPassword("");
  };

  const handleConfirmClick = async () => {
    setIsLoading(true);
    const changeSuccess = await fetchFunction(email, password, confirmPassword);
    setIsLoading(false);
    if (changeSuccess) {
      setEmail("");
      setPassword("");
      setSecondPassword("");
      handleClose();
    }
  };

  const fetchPasswordChange = async (email, password, confirmPassword) => {
    try {
      const response = await fetch("/user/passwordChange", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      } else {
        alert("Password updated!");
        return true;
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const fetchEmailChange = async (email, password, confirmPassword) => {
    try {
      const response = await fetch("/user/mailchange", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          email: email,
          password: confirmPassword,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      } else {
        alert("E-mail updated!");
        return true;
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      Account Credentials
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
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
            id="email"
            label="New Email"
            type="email"
            value={email}
            onChange={(e) => handleFieldValueChange(e, setEmail)}
            error={emailError}
            helperText={emailError ? emailErrorText : ""}
          />
          <Button
            variant="contained"
            type="button"
            onClick={handleEmailChangeSubmit}
          >
            Change E-mail
          </Button>
          <TextField
            id="password"
            label="New Password"
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
        <Button
          variant="contained"
          type="button"
          onClick={handlePasswordChangeSubmit}
        >
          Change password
        </Button>
      </Box>
      <CircularBackdrop open={isLoading}></CircularBackdrop>
      <DialogPopUp
        open={dialogOpen}
        handleClose={handleClose}
        handleConfirmClick={handleConfirmClick}
        handleTextChange={(e) => handleFieldValueChange(e, setConfirmPassword)}
        textFieldValue={confirmPassword}
        text="To confirm credential changes, please enter your current password!"
      ></DialogPopUp>
    </div>
  );
};

export default AccountCredentials;
