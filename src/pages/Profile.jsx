import React, { useEffect } from "react";
import { Typography, Grid } from '@mui/material';
import FollowingArtists from "../components/FollowingArtists";
import TopTracks from "../components/TopTracks";
import ProfileBar from "../components/ProfileBar";
import SavedShows from "../components/SavedShows";
import '@fontsource/inter';

const UserProfile = () => {

  useEffect(() => {
  }, []);

  return (
    <>
      <Grid>
        <ProfileBar />
      </Grid>
      <Grid>
        <Typography variant="h5" gutterBottom style={{ 
          marginTop: 25,
          fontWeight: 'bold',
          fontSize: '28px', 
          fontFamily: 'Inter, sans-serif',  
          color: '#333', 
          marginBottom: '20px', 
          textAlign: 'center',
          padding: '15px'
        }}>
          Artists you follow
        </Typography>
        <FollowingArtists />
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom style={{ 
          marginTop: 50,
          fontWeight: 'bold',
          fontSize: '28px', 
          fontFamily: 'Inter, sans-serif',  
          color: '#333', 
          marginBottom: '20px', 
          textAlign: 'center',
          padding: '15px'
        }}>
          Your top tracks
        </Typography>
        <TopTracks />
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom style={{ 
          marginTop: 50,
          fontWeight: 'bold',
          fontSize: '28px', 
          fontFamily: 'Inter, sans-serif',  
          color: '#333', 
          marginBottom: '20px', 
          textAlign: 'center',
          padding: '15px'
        }}>
          Your saved podcasts
        </Typography>
        <SavedShows />
      </Grid>
    </>
  );
};

export default UserProfile;
