import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, FormControl, Button, InputLabel, Input } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../utility/passwordValidator";

const Login = () => {
  const navigate = useNavigate();
  const loginUser = async (values) => {
    console.log("Axios request");
    console.log(values);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_LOCAL}/login`,
        {
          email: values.email,
          password: values.password,
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
      password: "123456789",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("This is actually working");
      await loginUser(values);
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
          <InputLabel htmlFor="name">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
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
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
