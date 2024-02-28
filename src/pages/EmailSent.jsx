// Render this view when we know that email exists
import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EmailSent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CheckCircleOutlineIcon
          color="success"
          sx={{ fontSize: 60, marginBottom: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          Email has been sent!
        </Typography>
      </Paper>
    </Box>
  );
};

export default EmailSent;