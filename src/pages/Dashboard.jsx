import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import ResponsiveAppBar from "../components/appBar";
import SongList from "../components/songList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ListeningTrendsGraph from "../components/listeningTrendsGraph";
import TopGenresGraph from "../components/topGenresGraph";
import StatsCard from "../components/statsCard";
import TopSongCard from "../components/TopSongCard"
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../slices/user/user-details-slice";
// Supports weights 100-900
// todo: temp data until backend is done

const topSongCardData = {
  title: "Top Song For Today!",
  thumbnail: "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  songName: "In the End",
  artist: "Linkin Park",
  genres: "Alt Rock, Metal"
}

const sampleSongData = [
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    track_name: "Cut To The Feeling",
    artists: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  }
];

const sampleListeningData = [];

function Dashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // get user's email from localStorage
  const currUserEmail = sessionStorage.getItem('currentUserEmail');
  dispatch(userDetailsActions.setUserEmail(currUserEmail));

  const name = queryParams.get("displayName");

  const [rpData, setData] = useState([sampleSongData]);
  const [rcData, setRcData] = useState([sampleSongData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_LOCAL}/api/recently-played/${name}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRcData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_LOCAL}/api/recommended/${name}`
        );
        const jsonData = await response.json();
        setRcData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
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


      <Container maxWidth="lg" style={{ padding: "24px" }}>
        <Grid>
          <Typography ml={25} mt={10} variant="h3" style={{ fontFamily: "sans-serif", fontWeight: 'bold' }}>
            Spotify ReWrapped.
          </Typography>
          <Typography ml={25} mt={2} mb={5} variant="subtitle1" color="#61758A">
            Listen with your friends and discover new music
          </Typography>
        </Grid>
        <Grid>
          {/* <Typography variant="h5" mb={5} textAlign={"center"}>
            Top Song For Today.
          </Typography> */}
          <TopSongCard mt={7} mData={topSongCardData} />
          {/* <Typography variant="h5" textAlign={"center"}>
            Listening Metrics
          </Typography> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 10,
              pb: 12,
              height: "250px",
            }}
          >
            <Box sx={{ mr: 1 }}>
              <StatsCard
                title={"Listening Trends"}
                value={"+5%"}
                subtitle={"Last 6 Months +5%"}
              />
              <ListeningTrendsGraph userData={sampleListeningData} />
            </Box>
            <Box sx={{ ml: 1 }}>
              <StatsCard
                title={"Top Genres"}
                data={"4"}
                subtitle={"All Time 4"}
              />
              <TopGenresGraph userId={name} />
            </Box>
          </Box>
        </Grid>

        <Grid container spacing={6} mt={7}>
          <Grid item xs={12}>
            <Typography
              padding="5px"
              style={{ fontFamily: "sans-serif", fontWeight: 'bold', textAlign: 'left' }}
              variant="h5"
              gutterBottom
            >
              Top Songs from your friends
            </Typography>
            <SongList musicData={sampleSongData} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              padding="5px"
              style={{ fontFamily: "sans-serif", fontWeight: 'bold', textAlign: 'left' }}
              variant="h5"
              gutterBottom
            >
              Based on your groups listening history
            </Typography>
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
