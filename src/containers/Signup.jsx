import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Grid, Typography, Avatar, Link, FormControlLabel, Checkbox } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../utility/passwordValidator";
// import { useAxios } from "../hooks/useAxios";
// import { passwordValidation } from "../utility/passwordValidator";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../slices/user/user-details-slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async (values) => {
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
        // store current user's email as global state
        dispatch(userDetailsActions.setUserEmail(values.email));
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
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createUser(values);
    },
  });

  return (
    <Grid container padding={10}>
      <Grid
        container
        display={"flex"}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Grid>
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
          id="name"
          name="name"
          label="Username"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
              sx={{ color: 'grey' }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // disabled={loading}
          style={{
            marginTop: 20,
            borderRadius: 25,
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
          }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end" sx={{mt:2}}>
          <Grid item>
            <Link href="/" variant="body2">
              Already an user? 
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Grid>
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
