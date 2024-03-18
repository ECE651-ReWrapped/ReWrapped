import React from "react";
import { Container, Typography } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">404: Invalid Page</Typography>
    </Container>
  );
};
