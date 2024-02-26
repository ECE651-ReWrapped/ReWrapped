import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import ResponsiveAppBar from "../components/appBar";
import SongList from "../components/songList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ListeningTrendsGraph from "../components/listeningTrendsGraph";
import TopGenresGraph from "../components/topGenresGraph";
import StatsCard from "../components/statsCard";

// todo: temp data until backend is done

const sampleSongData = [
  {
    name: "Cut To The Feeling",
    artist: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    name: "Cut To The Feeling",
    artist: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    name: "Cut To The Feeling",
    artist: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    name: "Cut To The Feeling",
    artist: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
  {
    name: "Cut To The Feeling",
    artist: "Carly Rae Jepsen",
    album: "Cut To The Feeling",
    albumArt:
      "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
  },
];

const sampleListeningData = [];

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("displayName");

  const [rpData, setData] = useState(null);
  const [rcData, setRcData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_LOCAL}/recently-played/${name}`
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
          `${process.env.REACT_APP_API_LOCAL}/recommended/${name}`
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
      <Typography ml={10} mt={2} mb={5} variant="subtitle1" color="#61758A">
        Listen with your friends and discover new music
      </Typography>

      <Container maxWidth="lg" style={{ padding: "24px" }}>
        <Grid>
          <Typography variant="h5" textAlign={"center"}>
            Listening Metrics
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
              <TopGenresGraph userData={sampleListeningData} />
            </Box>
          </Box>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography
              padding="5px"
              style={{ textAlign: "center" }}
              variant="h5"
              gutterBottom
            >
              Top Songs from your friends
            </Typography>
            <SongList musicData={rpData} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              padding="5px"
              style={{ textAlign: "center" }}
              variant="h5"
              gutterBottom
            >
              Based on your groups listening history
            </Typography>
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
