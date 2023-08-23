import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  checkEmailRegex,
  checkPasswordRegex,
  checkIfPasswordsMatch,
} from "../../Utilities/AccountUtils";
import DialogPopUp from "../Utilities/DialogPopUp";

const AccountCredentials = () => {
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

  const handleEmailChangeSubmit = () => {
    if (checkEmailRegex(email, setEmailError, setEmailErrorText)) {
      handleClickOpen(true);
      // fetchEmailChange
    }
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
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
      //fetchPasswordChange
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSecondPasswordChange = (e) => {
    const newPassword = e.target.value;
    setSecondPassword(newPassword);
  };

  return (
    <div>
      AccountCredentials
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
            onChange={handleEmailChange}
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
        <Button
          variant="contained"
          type="button"
          onClick={handlePasswordChangeSubmit}
        >
          Change password
        </Button>
      </Box>
      <DialogPopUp open={dialogOpen} handleClose={handleClose}></DialogPopUp>
    </div>
  );
};

export default AccountCredentials;
