import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";
import { useSelector } from "react-redux";

const UserPlaylists = () => {
  const classes = useStyles();
  const [userPlaylists, setUserPlaylists] = useState([]);
  const accessToken = useSelector(state => state.spotify.accessToken);

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
  }, [accessToken]);

  return (
    <>
      {userPlaylists ? <Grid container spacing={2} >
        {userPlaylists.map((playlist, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} > {/* NOSONAR */}
            <ListItem className={classes.listItem} style={{ width: '300px' }}>
              <ListItemAvatar sx={{ padding: 1 }}>
                <Avatar
                  alt={playlist.name}
                  src={playlist.images && playlist.images.length > 0 ? playlist.images[0].url : 'defaultImageURL'}
                  className={classes.avatar}
                />
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
                      <br />
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
      </Grid> : <p>You don't have any playlists! </p>}
    </>
  );
};

export default UserPlaylists;
