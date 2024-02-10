import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Box width="50%" style={{ textAlign: 'left', margin: '0 auto' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold', color: '#1DB954', fontStyle: 'italic'}}>
          Spotify
        </Typography>
        <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', fontStyle: 'italic'}}>
          ReWrapped.
        </Typography>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Home;
