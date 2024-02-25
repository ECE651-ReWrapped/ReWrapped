import React from 'react';
import { Grid, Typography, Container } from "@mui/material";
import ResponsiveAppBar from '../components/appBar';
import SongList from '../components/songList';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('displayName');

  const [rpData, setData] = useState(null);
  const [rcData, setRcData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/recently-played/' + name);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRcData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/recommended/' + name);
        const jsonData = await response.json();
        setRcData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRcData();
  }, []);
  if (rpData === null || rcData === null) {
    return <p>Loading...</p>;
  }

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

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={10} direction={'column'}>
          <Grid item >
            <Typography padding='5px' style={{ textAlign: 'center' }} variant="h5" gutterBottom>Top Songs from your friends</Typography>
            <SongList musicData={rpData} />
          </Grid>
          <Grid item >
            <Typography padding='5px' style={{ textAlign: 'center' }} variant="h5" gutterBottom>Based on your groups listening history</Typography>
            <SongList musicData={rcData} />
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
