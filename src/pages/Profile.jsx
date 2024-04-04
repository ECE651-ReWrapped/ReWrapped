import React, { useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import FollowingArtists from "../components/FollowingArtists";
import TopTracks from "../components/TopTracks";
import ProfileBar from "../components/ProfileBar";
import SavedShows from "../components/SavedShows";
import UserPlaylists from "../components/UserPlaylists";
import ResponsiveAppBar from "../components/appBar";

const UserProfile = () => {
  useEffect(() => { }, []);

  return (
    <Grid>
      <ResponsiveAppBar />
      <Grid>
        <ProfileBar />
      </Grid>
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 25,
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "sans-serif",
            color: "#333",
            textAlign: "center",
            padding: "15px",
          }}
        >
          Artists you follow
        </Typography>
        <FollowingArtists />
      </Grid>

      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 50,
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "sans-serif",
            color: "#333",
            textAlign: "center",
            padding: "15px",
          }}
        >
          Your top tracks
        </Typography>
        <TopTracks />
      </Grid>

      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 50,
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "sans-serif",
            color: "#333",
            textAlign: "center",
            padding: "15px",
          }}
        >
          Your saved podcasts
        </Typography>
        <SavedShows />
      </Grid>

      <Grid
        container
        sx={{ marginBottom: 15 }}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 50,
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "sans-serif",
            color: "#333",
            textAlign: "center",
            padding: "15px",
          }}
        >
          Your saved playlists
        </Typography>
        <UserPlaylists />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
