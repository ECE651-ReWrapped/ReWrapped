import React from 'react';
import { Box, Typography, Avatar, TextField, Button } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const SetNewPassword = () => {
    return (
        <Box
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
        </Box>
    );
};

export default SetNewPassword;