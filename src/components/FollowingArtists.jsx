import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";
import { useSelector, useDispatch } from 'react-redux';
import { spotifyActions } from "../slices/user/access-token-slice";

const FollowingArtists = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userArtists, setUserArtists] = useState([]);
  const accessToken = useSelector(state => state.spotify.accessToken);

  useEffect(() => {
    var topArtistsSeeds = [];
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
          params: {
            limit: 6,
            offset: 0
          },
        });
        setUserArtists(res.data.items);

        // update artists in global state
        res.data.items.forEach((item) => {
          topArtistsSeeds.push(item.uri.split(':')[2]);
        });
        dispatch(spotifyActions.setTopArtistsSeeds(topArtistsSeeds));

      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    getApiData();
  }, [accessToken, dispatch]);

  return (
    <>
    {userArtists? <Grid container spacing={2}>
      {userArtists.map((artist, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} >
          <ListItem className={classes.listItem} style={{width: '300px'}}>
            <ListItemAvatar sx={{padding: 1}}>
              <Avatar alt={artist.name} src={artist.images[0].url} className={classes.avatar} />
            </ListItemAvatar>
            <Grid item className={classes.textContainer}>
              <ListItemText
                primary={
                  <Typography variant="h6" className={classes.primaryText}>
                    {artist.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      Popularity: {artist.popularity}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      Followers: {artist.followers.total}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </ListItem>
        </Grid>
      ))}
    </Grid> : <p>You don't follow any artists!</p>}
    </>
  );
};

export default FollowingArtists;
