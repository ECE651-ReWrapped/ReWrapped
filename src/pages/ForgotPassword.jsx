import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from 'react-router-dom';
import axios from "axios";
import EmailSent from '../components/EmailSent';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailExists, setEmailExists] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendRequest = async () => {
    console.log(`Sending password reset request for email: ${email}`);
    // check if email exists in db
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_LOCAL}/reset-password`,
        {
          email : email 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.status === 200) { // user exists
        setEmailExists(true);
      } else {
        // user does not exist
        setEmailExists(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    {!emailExists && <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#2EB367", width: 64, height: 64 }}>
        <LockResetIcon />
      </Avatar>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, mt: 4, color: '#333333' }}>
        Forgot your password?
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ 
        mb: 2, 
        width: '100%',
        '@media (min-width: 600px)': {
            width: '50%', 
                },
        '@media (min-width: 960px)': {
            width: '25%', 
        },
        }}
      >
        Please enter the email address associated with your account, and we'll email you a link to reset your password.
      </Typography>
      <TextField
        type="email"
        label="Email address"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={handleEmailChange}
        sx={{
            width: '100%', // Default width for mobile screens
            mb: 2,

            '@media (min-width: 600px)': {
            width: '50%', // Set width to 25% for medium screens
            },

            '@media (min-width: 960px)': {
            width: '25%', // Set width to 25% for large screens
            },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSendRequest}
        sx={{
            mt: 2,
            borderRadius: 2,
            p: "10px 20px",
            fontWeight: "bold",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#212121",
            color: "white",
            width: '100%', 
            textTransform: "none",

            '@media (min-width: 600px)': {
            width: '50%', 
            },

            '@media (min-width: 960px)': {
            width: '25%', 
            },
        }}
        >
          Send Request
      </Button>
      <Link to="/" style={{ mt: 3, textDecoration: 'none' }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginTop: 4,
            '&:hover': {
              color: 'text.primary',
            },
          }}
        >
          &lt; Return to Sign In
        </Typography>
      </Link>
    </Box>}
    {emailExists && <EmailSent />}
    </>
  );
};

export default ForgotPassword;
