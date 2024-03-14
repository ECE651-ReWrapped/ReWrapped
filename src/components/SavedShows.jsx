import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";

// temp data
const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

const sampleShowsList = [
  {
    show: {
      name: "The Joe Rogan Experience",
      images: [
        {
          url: "https://media.gettyimages.com/id/1238367041/photo/in-this-photo-illustration-the-joe-rogan-experience-podcast-logo-is-displayed-on-a-smartphone.jpg?s=612x612&w=0&k=20&c=XOxz1VGRDj6RGAGMWrPy6syFTdj8qqA_-OrG6sVvVwU="
        }
      ],
      publisher: "Joe Rogan",
      languages: ['EN']
    }
  },
  {
    show: {
      name: "TED Talks Daily",
      images: [
        {
          url: "https://media.gettyimages.com/id/1301799123/photo/vancouver-canada-april-08-the-ted-logo-stands-illuminated-on-stage-in-the-community-theater.jpg?s=612x612&w=0&k=20&c=ktBVRfy4UXibzOjPeFJ4sbJ1u_JX5aa0qKDCCIKzrW0="
        }
      ],
      publisher: "TED",
      languages: ['EN']
    }
  },
  {
    show: {
      name: "Stuff You Should Know",
      images: [
        {
          url: "https://media.gettyimages.com/id/1463172798/photo/detroit-michigan-a-wilson-brand-official-game-ball-basketball-is-pictured-with-the-nba-logo.jpg?s=612x612&w=0&k=20&c=IokkqoCA9G-jkvsTj9CImSsSvS9Odl5sHis1q1U4XvA="
        }
      ],
      publisher: "iHeartRadio",
      languages: ['EN']
    }
  },
  {
    show: {
      name: "The Daily",
      images: [
        {
          url: "https://media.gettyimages.com/id/1236487276/photo/this-picture-taken-on-september-22-2021-shows-kylie-wang-and-ken-young-hosts-of-a-popular.jpg?s=612x612&w=0&k=20&c=hzcnhHjlLb81q6lJ8PKFl6FIxhsY6luG_tyAtznLYvg="
        }
      ],
      publisher: "The New York Times",
      languages: ['EN']
    }
  },
  {
    show: {
      name: "Crime Junkie",
      images: [
        {
          url: "https://media.gettyimages.com/id/612959590/photo/new-york-unambiguous-bull-and-his-team-tackle-jury-bias-against-their-client-a-woman-on-trial.jpg?s=612x612&w=0&k=20&c=KkTWGMvH1bP-Wou50ab2aZXzHbXTY9Am8JsgnOv62cc="
        }
      ],
      publisher: "Audiochuck",
      languages: ['EN']
    }
  },
  {
    show: {
      name: "How I Built This with Guy Raz",
      images: [
        {
          url: "https://media.gettyimages.com/id/615776982/photo/washington-dc-guy-raz-host-and-editorial-director-of-nprs-ted-radio-hour-and-the-how-i-built.jpg?s=612x612&w=0&k=20&c=n-4Pm7hoTFRG1de3HIjavrycaw3wHHjCODEXP8Xeu78="
        }
      ],
      publisher: "NPR",
      languages: ['EN']
    }
  }
];


const SavedShows = () => {
  const classes = useStyles();
  const [savedShowsList, setSavedShowsList] = useState([]);

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
  }, []);

  return (
    <Grid container spacing={2}>
      {sampleShowsList.map((show, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} >
          <ListItem className={classes.listItem} style={{width: '300px'}}>
            <ListItemAvatar sx={{padding: 1}}>
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
                    <br/>
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
    </Grid>
  );
};

export default SavedShows;
