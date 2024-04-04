import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";
import { useSelector } from "react-redux";

const SavedShows = () => {
  const classes = useStyles();
  const [savedShowsList, setSavedShowsList] = useState([]);
  const accessToken = useSelector(state => state.spotify.accessToken);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me/shows", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 6,
            offset: 0,
          },
        });
        setSavedShowsList(res.data.items);

      } catch (err) {
        console.error("Error fetching saved shows:", err);
      }
    };
    getApiData();
  }, [accessToken]);

  return (
    <>
      {savedShowsList ? <Grid container spacing={2}>
        {savedShowsList.map((show, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} > {/* NOSONAR */}
            <ListItem className={classes.listItem} style={{ width: '300px' }}>
              <ListItemAvatar sx={{ padding: 1 }}>
                <Avatar alt={show.show.name} src={show.show.images[0].url} className={classes.avatar} />
              </ListItemAvatar>
              <Grid item className={classes.textContainer}>
                <ListItemText
                  primary={
                    <Typography variant="h6" className={classes.primaryText}>
                      {show.show.name.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.secondaryText}
                      >
                        {show.show.publisher}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.secondaryText}
                      >
                        Language: {show.show.languages[0]}
                      </Typography>
                    </>
                  }
                />
              </Grid>
            </ListItem>
          </Grid>
        ))}
      </Grid> : <p>You don't have any saved shows!</p>}
    </>
  );
};

export default SavedShows;
