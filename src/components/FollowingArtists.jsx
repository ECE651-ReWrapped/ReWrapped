import { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";

// temp data
const accessToken = "BQCbal1N8OpX_U10GjpXc-p0YKSkEyQFwK1VpGccfVgfDm7Sl9lYXd48UaWelLT64Zz66Zyku3QwkYs0IEL3oolg9iZL5u_hbLYvbuA8LCAXoIYeE8mCNzvbrTKUwgXyvTrozEOuLfMPGqZaDTBSaFBaVhGCHo0AVX9B7w2DZ-3BAvkRYhtom0X4rK3jDB7rUyDQHo9F6Y6hEA5mjI1v-zTV3kr4KDGfPOESRg";

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: 'white',  
    borderRadius: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (min-width: 320px) and (max-width: 500px)': {
      padding: 2, 
      marginLeft: '5%'
    },
    '@media (min-width: 501px)': {
      padding: 2, 
      marginLeft: '25%'
    },
  },
  avatar: {
    marginLeft: 5,
    width: 70, 
    height: 70, 
    '@media (min-width: 600px)': {
      width: 60, 
      height: 60, 
    },
    '@media (min-width: 960px)': {
      width: 70, 
      height: 70, 
    },
  },
  textContainer: {
    marginLeft: 10, 
    '@media (min-width: 600px)': {
      marginLeft: 14, 
    },
    '@media (min-width: 960px)': {
      marginLeft: 20, 
    },
  },
  primaryText: {
    fontWeight: 'bold',
    color: 'black',  
    fontFamily: 'Spotify, Arial, sans-serif',  
    fontSize: 15, 
    '@media (min-width: 600px)': {
      fontSize: 16, 
    },
    '@media (min-width: 960px)': {
      fontSize: 18, 
    },
  },
  secondaryText: {
    color: 'black',  
    fontFamily: 'Spotify, Roboto, sans-serif',  
    fontSize: 12, 
    '@media (min-width: 600px)': {
      fontSize: 13, 
    },
    '@media (min-width: 960px)': {
      fontSize: 13, 
    },
  },
}));



const FollowingArtists = () => {
  const classes = useStyles();
  const [userArtists, setUserArtists] = useState([]);

  useEffect(() => {
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
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    getApiData();
  }, []);

  return (
    <Grid container spacing={2}>
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
    </Grid>
  );
};

export default FollowingArtists;
