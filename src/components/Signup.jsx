import { useState } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import { passwordValidation } from "../utility/passwordValidator";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    matchPassword: "",
  });

  const createUser = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/signup",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data);

      if (res.data.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      navigate("/signup");
    }
  };

  return (
    <Box>
      <TextField label="username" />
    </Box>
  );
};

export default Signup;

// const createUser = useAxios({
//   axiosInstance: axios,
//   method: "POST",
//   url: "/signup",
//   requestData: {
//     email: user.email,
//     userName: user.username,
//     password: user.password,
//     confirmPassword: user.matchPassword,
//   },
//   requestConfig: {
//     headers: {
//       //Custom headers, can't remember if I need this
//     },
//   },
// });
