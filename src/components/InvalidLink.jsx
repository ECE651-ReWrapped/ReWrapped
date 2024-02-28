import React from 'react';
import { Container, Typography } from '@mui/material';

function InvalidLink() {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" color="error">
          Not a valid link!
        </Typography>
      </div>
    </Container>
  );
}

export default InvalidLink;
