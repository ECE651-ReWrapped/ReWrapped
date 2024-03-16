import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";
import { useSelector } from "react-redux";


const TopTracks = () => {
  const classes = useStyles();
  const [userTopTracks, setUserTopTracks] = useState([]);
  const accessToken = useSelector(state => state.spotify.accessToken);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
          params: {
            limit: 6,
            offset: 0
          },
        });
        setUserTopTracks(res.data.items);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    getApiData();
  }, [accessToken]);

  return (
    <>
    {userTopTracks ? <Grid container spacing={2} >
      {userTopTracks.map((track, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} >
          <ListItem className={classes.listItem} style={{width: '300px'}}>
            <ListItemAvatar sx={{padding: 1}}>
              <Avatar alt={track.name} src={track.album.images[0].url} className={classes.avatar} />
            </ListItemAvatar>
            <Grid item className={classes.textContainer}>
              <ListItemText
                primary={
                  <Typography variant="h6" className={classes.primaryText}>
                    {track.name.split(' ').slice(0, 2).join(' ')}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      {track.artists[0].name}
                    </Typography>
                    <br/>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      Popularity: {track.popularity}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </ListItem>
        </Grid>
      ))}
    </Grid> : <p>You don't have any top tracks!</p> }
    </>
  );
};

export default TopTracks;
