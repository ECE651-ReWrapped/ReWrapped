import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const artistsList = [
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  },
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  },
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  },
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  },
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  },
  {
    artistName: "Some Artist",
    popularity: 59,
    artistTotalFollowers: 987571,
    artistImage: "https://i.scdn.co/image/ab6761610000f178de20f1d3bdfc3239a770921c"
  }
];

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: '#D7EBD5',  
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

  return (
    <Grid container spacing={2}>
      {artistsList.map((artist, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} >
          <ListItem className={classes.listItem} style={{width: '300px'}}>
            <ListItemAvatar sx={{padding: 1}}>
              <Avatar alt={artist.artistName} src={artist.artistImage} className={classes.avatar} />
            </ListItemAvatar>
            <Grid item className={classes.textContainer}>
              <ListItemText
                primary={
                  <Typography variant="h6" className={classes.primaryText}>
                    {artist.artistName}
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
                      Followers: {artist.artistTotalFollowers}
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
