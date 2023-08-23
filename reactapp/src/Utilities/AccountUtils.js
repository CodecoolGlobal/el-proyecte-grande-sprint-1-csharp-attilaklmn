const emailValidatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidatorRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
const notValidFormatText = "Not valid format!";
const notValidPasswordFormatText =
  "Password must contain at least 6 characters, upper and lower case letters and a number";

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
