import React from 'react';
import { Grid, Typography, Container } from "@mui/material";
import SongList from '../components/songList';
import ListeningTrends from '../components/listeningTrends';

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

const sampleListeningData = [];

function Dashboard() {
  return (
    <div>
      <Typography ml={2} mt={2} variant="h1">
        ReWrapped.
      </Typography>
      <Typography ml={3} mt={2} mb={5} variant="subtitle1">Listen with your friends and discover new music</Typography>

      <Container maxWidth="lg" style={{ padding: '24px' }}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <ListeningTrends userData={sampleListeningData} />
          </Grid>
          <Grid item xs={12}>
            <Typography padding='5px' style={{ textAlign: 'center' }} variant="h5" gutterBottom>Top Songs from your friends</Typography>
            <SongList musicData={sampleSongData} />
          </Grid>
          <Grid item xs={12}>
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
