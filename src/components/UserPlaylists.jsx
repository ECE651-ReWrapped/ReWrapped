import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";

// temp data
const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

const samplePlaylists = [
  {
    name: "Chill Vibes",
    images: [{ url: "https://media.gettyimages.com/id/527437792/photo/a-boy-leans-back-over-a-large-boulder-at-moeraki-boulders-in-the-early-morning-sun-listening.jpg?s=612x612&w=0&k=20&c=C5IwDzQtZG-bNEgUTEKrj46psFim3UgM3gmCWsrBq2Y=" }],
    owner: {
      display_name: "Sarah Smith"
    },
    tracks: { total: 50 }
  },
  {
    name: "Workout Mix",
    images: [{ url: "https://media.gettyimages.com/id/527437792/photo/a-boy-leans-back-over-a-large-boulder-at-moeraki-boulders-in-the-early-morning-sun-listening.jpg?s=612x612&w=0&k=20&c=C5IwDzQtZG-bNEgUTEKrj46psFim3UgM3gmCWsrBq2Y=" }],
    owner: {
      display_name: "John Doe"
    },
    tracks: { total: 35 }
  },
  {
    name: "Study Time",
    images: [{ url: "https://media.gettyimages.com/id/543024878/photo/students-on-their-laptops-study-in-the-brody-learning-commons-a-study-space-and-library-on-the.jpg?s=612x612&w=0&k=20&c=ynbX0sWpN366t-uXwVZYbZRp549GjPADhBo8cDNTO9o=" }],
    owner: {
      display_name: "Emily Johnson"
    },
    tracks: { total: 40 }
  },
  {
    name: "Summer Jams",
    images: [{ url: "https://media.gettyimages.com/id/515462866/photo/scenes-in-the-popular-resort-town-palm-springs-california-showing-swimming-pools-sun-bathing.jpg?s=612x612&w=0&k=20&c=A4pXxf4yS2fxYzSB3lPSCIhFpWxujvS5tmUx61_fMvc=" }],
    owner: {
      display_name: "Alex Williams"
    },
    tracks: { total: 60 }
  },
  {
    name: "Throwback Hits",
    images: [{ url: "https://media.gettyimages.com/id/168999727/photo/greece-a-tourism-brochure-for-pylos-from-1955-in-greece.jpg?s=612x612&w=0&k=20&c=97dOszlyWCFxvbc18k-T1mdKieCMcifLyaUuLhPqdCk=" }],
    owner: {
      display_name: "Michael Brown"
    },
    tracks: { total: 55 }
  },
  {
    name: "Party Time",
    images: [{ url: "https://media.gettyimages.com/id/51160437/photo/strasbourg-france-italian-students-from-the-primo-levi-technical-institute-of-vignola-in-the.jpg?s=612x612&w=0&k=20&c=Rt5NPdduT9DSyN26qihfPDXmnslUoQtynBGx1cVcCMM=" }],
    owner: {
      display_name: "Jessica Davis"
    },
    tracks: { total: 45 }
  }
];

const UserPlaylists = () => {
  const classes = useStyles();
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
          params: {
            limit: 6, 
            offset: 0
          }
        });
        setUserPlaylists(res.data.items);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    getApiData();
  }, []);

  return (
    <Grid container spacing={2} >
      {samplePlaylists.map((playlist, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} >
          <ListItem className={classes.listItem} style={{width: '300px'}}>
            <ListItemAvatar sx={{padding: 1}}>
              <Avatar alt={playlist.name} src={playlist.images[0].url} className={classes.avatar} />
            </ListItemAvatar>
            <Grid item className={classes.textContainer}>
              <ListItemText
                primary={
                  <Typography variant="h6" className={classes.primaryText}>
                    {playlist.name.split(' ').slice(0, 2).join(' ')}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      {playlist.owner.display_name}
                    </Typography>
                    <br/>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      Popularity: {playlist.tracks.total}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserPlaylists;
