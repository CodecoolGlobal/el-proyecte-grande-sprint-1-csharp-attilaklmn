const emailValidatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidatorRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
const notValidFormatText = "Not valid format!";
const notValidPasswordFormatText =
  "Password must contain at least 6 characters, upper and lower case letters and a number";
const minimumUsernameLength = 4;
const notLongEnoughUserNameText =
  "The username must be at least " +
  minimumUsernameLength +
  " characters long!";
const notMatchingPasswordsText = "The passwords must match!";

export const checkEmailRegex = (email, setEmailError, setEmailErrorText) => {
  if (emailValidatorRegex.test(email)) {
    setEmailError(false);
    return true;
  } else {
    setEmailError(true);
    setEmailErrorText(notValidFormatText);
    return false;
  }
};

export const checkPasswordRegex = (
  password,
  setPasswordError,
  setPasswordErrorText
) => {
  if (passwordValidatorRegex.test(password)) {
    setPasswordError(false);
    return true;
  } else {
    setPasswordError(true);
    setPasswordErrorText(notValidPasswordFormatText);
    return false;
  }
};

export const checkUsernameRegex = (
  username,
  setUsernameError,
  setUsernameErrorText
) => {
  if (username.length < minimumUsernameLength) {
    setUsernameError(true);
    setUsernameErrorText(notLongEnoughUserNameText);
    return false;
  } else {
    setUsernameError(false);
    return true;
  }
};

export const checkIfPasswordsMatch = (
  password,
  secondPassword,
  setSecondPasswordError,
  setSecondPasswordErrorText
) => {
  if (password !== secondPassword) {
    setSecondPasswordError(true);
    setSecondPasswordErrorText(notMatchingPasswordsText);
    return false;
  } else {
    setSecondPasswordError(false);
    return true;
  }
};
