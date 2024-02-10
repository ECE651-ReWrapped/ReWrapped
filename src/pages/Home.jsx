import { Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              color: "#1DB954",
              fontStyle: "italic",
            }}
          >
            Spotify
          </Typography>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              color: "#000000",
              fontStyle: "italic",
            }}
          >
            ReWrapped.
          </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
