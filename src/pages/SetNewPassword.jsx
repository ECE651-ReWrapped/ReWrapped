import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, TextField, Button } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InvalidLink from '../components/InvalidLink';

const SetNewPassword = () => {
    const [password, setPassword] = useState('');
    const [tokenValid, setTokenValid] = useState(undefined); // undefined - invalid token, false - unknown error code
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        const validateToken = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/reset-password/${token}`);
                if (res.status === 200) {
                    setTokenValid(true);
                } else if (res.status === 405) {
                    setTokenValid(undefined);
                } else {
                    console.error(`Unexpected response status: ${res.status}`);
                    setTokenValid(false);
                }
            } catch (err) {
                console.error('Error during token validation:', err.message);
                setTokenValid(false);
            }
        };
        validateToken();
    }, [token]); 


    const handleResetPasswordUpdate = async () => {
        // send request to backend to update password
        try {
            const res = await axios.put(
            `${process.env.REACT_APP_API_LOCAL}/reset-password`,
            {
                urlToken : token, 
                password : password,
                confirmPassword : confirmPassword
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (res.status === 200) {
                navigate('/');
            } else {
                
            }
        } catch (err) {
            console.error(err);
            navigate('/reset-password');
        }
    };

    return (
        <>
        {tokenValid && <Box
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
                <Avatar sx={{ m: 1, bgcolor: "#C33271", width: 64, height: 64 }}>
                    <LockResetOutlinedIcon />
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, mt: 4, color: '#333333' }}>
                    Enter your new password
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
                    Must be atleast 8 characters
                </Typography>
                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                    sx={{
                        width: '100%', 
                        mb: 2,

                        '@media (min-width: 600px)': {
                        width: '50%', 
                        },

                        '@media (min-width: 960px)': {
                        width: '25%', 
                        },
                    }}
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    margin="normal"
                    id="confirm password"
                    name="confirm password"
                    value={confirmPassword}
                    onChange={e => {setConfirmPassword(e.target.value)}}
                    sx={{
                        width: '100%', 
                        mb: 2,

                        '@media (min-width: 600px)': {
                        width: '50%', 
                        },

                        '@media (min-width: 960px)': {
                        width: '25%', 
                        },
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleResetPasswordUpdate}
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
                    Reset Password
                </Button>
        </Box>}
        {tokenValid === undefined && <p>Loading...</p>}
        {tokenValid === false && <InvalidLink />}
        </>
    );
};

export default SetNewPassword;