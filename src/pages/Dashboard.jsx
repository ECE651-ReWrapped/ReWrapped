import React from 'react';
import { Grid, Typography, Container } from "@mui/material";
import ResponsiveAppBar from '../components/appBar';
import SongList from '../components/songList';

// todo: temp data until backend is done

const sampleSongData = [
  {
    "name": "Cut To The Feeling",
    "artist": "Carly Rae Jepsen",
    "album": "Cut To The Feeling",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
  },
  {
    "name": "Cut To The Feeling",
    "artist": "Carly Rae Jepsen",
    "album": "Cut To The Feeling",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
  },
  {
    "name": "Cut To The Feeling",
    "artist": "Carly Rae Jepsen",
    "album": "Cut To The Feeling",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
  },
  {
    "name": "Cut To The Feeling",
    "artist": "Carly Rae Jepsen",
    "album": "Cut To The Feeling",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
  },
  {
    "name": "Cut To The Feeling",
    "artist": "Carly Rae Jepsen",
    "album": "Cut To The Feeling",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
  }

]

function Dashboard() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid
        item
        xs={12}
        sm={6}
        ml={10} 
        mt={7}
        display={"flex"}
        justifyContent={"right"}
        flexDirection={"column"}
        alignItems={"right"}
      >
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
      <Typography ml={10} mt={2} mb={5} variant="subtitle1" color='#61758A'>Listen with your friends and discover new music</Typography>

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid container spacing={10} direction={'column'}>
          <Grid item >
            <Typography padding='5px' style={{ textAlign: 'center' }} variant="h5" gutterBottom>Top Songs from your friends</Typography>
            <SongList musicData={sampleSongData} />
          </Grid>
          <Grid item >
            <Typography padding='5px' style={{ textAlign: 'center' }} variant="h5" gutterBottom>Based on your groups listening history</Typography>
            <SongList musicData={sampleSongData} />
          </Grid>
        </Grid>
      </Container>
      {/* <div className="row my-5">
        <h3> Analytics - Charts</h3>
        <ul>
          <li>Compare all friends listening time</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
      </div> */}
    </div>


  );
}

export default Dashboard;
