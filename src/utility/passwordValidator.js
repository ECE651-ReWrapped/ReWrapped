//Password validation function to force the inputs on the frontend
//Between 8-32 characters, One letter, one lower and uppercase letter, One number
import * as yup from "yup";

const passwordValidation = (password) => {
  const theLength = /.{8,32}/;
  const numberCase = /[0-9]/;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  if (!theLength.test(password)) {
    return "Password Needs to be between 8 and 32 characters";
  } else if (!numberCase.test(password)) {
    return "Password needs to contain one number";
  } else if (!lowerCase.test(password)) {
    return "Password needs one lowercase letter";
  } else if (!upperCase.test(password)) {
    return "Password needs one uppercase letter";
  }
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export { passwordValidation, validationSchema };
