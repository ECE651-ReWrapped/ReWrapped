import { Box, Container } from "@mui/material";
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
      <Box width="50%"> Blah blah blah</Box>
      <Outlet />
    </Container>
  );
};

export default Home;
