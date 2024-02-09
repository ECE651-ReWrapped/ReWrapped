import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, FormControl, Button, InputLabel, Input } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../utility/passwordValidator";
// import { useAxios } from "../hooks/useAxios";
// import { passwordValidation } from "../utility/passwordValidator";

const Signup = () => {
  const navigate = useNavigate();
  const createUser = async (values) => {
    console.log("Axios request");
    console.log(values);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_LOCAL}/register`,
        {
          email: values.email,
          name: values.name,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.status === 200) {
        navigate("/dashboard");
      } else {
        // Handle non-200 HTTP status codes if needed
        console.error("Signup failed with status:", res.status);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      // It might be more user-friendly to handle navigation or error display here based on the error type
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "samudra123@mail.com",
      name: "abvsdfaf",
      password: "123456789",
      confirmPassword: "123456789",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("This is actually working");
      await createUser(values);
    },
  });

  return (
    <Box width="50%">
      <Box component="form" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="name">Username</InputLabel>
          <Input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // disabled={loading}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;

// const { response, error, loading, refetch } = useAxios({
//   axiosInstance: axios,
//   method: "POST",
//   url: "/register",
//   requestData: {
//     userData,
//   },
//   requestConfig: {
//     headers: {
//       //Custom headers, can't remember if I need this
//     },
//   },
// });
