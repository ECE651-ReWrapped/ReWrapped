import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../utility/passwordValidator";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const navigate = useNavigate();

  const loginUser = async (values) => {
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
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await loginUser(values);
    },
  });

  return (
    <>
      <Grid
        container
        display={"flex"}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
      </Grid>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: 20,
            borderRadius: 25,
            padding: "10px 20px",
            fontWeight: "bold",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "black",
            color: "white",
            width: "100%",
          }}
        >
          Login
        </Button>
        <Grid container display={'flex'} justifyContent={'flex-end'}>
          <Grid item xs sx={{ mt: 2, mb: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs sx={{ mt: 2, mb: 2 }} display={'flex'} justifyContent={"flex-end"}>
            <Link href="/signup" variant="body2">
              Don't have an account?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
