import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";

// temp data
const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

const sampleUserArtists = [
  {
    name: "Ed Sheeran",
    images: [
      {
        url: "https://media.gettyimages.com/id/1241121818/photo/london-england-singer-ed-sheeran-performs-during-the-platinum-jubilee-pageant-in-front-of.jpg?s=612x612&w=0&k=20&c=PbyuIvlYVgaeRovE6-rVwqW5rzWwKOSr47gJq-e5Xf8="
      }
    ],
    popularity: 95,
    followers: {
      total: 25458625
    }
  },
  {
    name: "Adele",
    images: [
      {
        url: "https://media.gettyimages.com/id/1406409082/photo/london-england-adele-performs-on-stage-as-american-express-present-bst-hyde-park-in-hyde-park.jpg?s=612x612&w=0&k=20&c=fSXmkast2enXwcm__XE3L-JVo_uqq7txv0eP4-1wX4U="
      }
    ],
    popularity: 90,
    followers: {
      total: 18785352
    }
  },
  {
    name: "Coldplay",
    images: [
      {
        url: "https://media.gettyimages.com/id/1422683703/photo/rio-de-janeiro-brazil-chris-martin-of-the-band-coldplay-performs-at-the-mundo-stage-during.jpg?s=612x612&w=0&k=20&c=3Whvmc3ni1xtmpdYhizzZm0_LHmht53spPJupZiE-Ec="
      }
    ],
    popularity: 91,
    followers: {
      total: 22387235
    }
  },
  {
    name: "Sam Smith",
    images: [
      {
        url: "https://media.gettyimages.com/id/1490430072/photo/paris-france-sam-smith-performs-onstage-at-accorhotels-arena-on-may-13-2023-in-paris-france.jpg?s=612x612&w=0&k=20&c=nho38M3XLv6SumQ1cqZ8QCXXr-CU6E6XJWPLal7jM2Q="
      }
    ],
    popularity: 83,
    followers: {
      total: 104572382
    }
  },
  {
    name: "Dua Lipa",
    images: [
      {
        url: "https://media.gettyimages.com/id/1369738887/photo/miami-florida-dua-lipa-performs-onstage-during-the-future-nostalgia-tour-at-ftx-arena-on.jpg?s=612x612&w=0&k=20&c=9X2HeX4Y9aD32neFfldZO9YLZj2SRtJ5yiS9vIrD42g="
      }
    ],
    popularity: 87,
    followers: {
      total: 165896168
    }
  },
  {
    name: "Harry Styles",
    images: [
      {
        url: "https://media.gettyimages.com/id/1393470391/photo/indio-california-harry-styles-performs-on-the-coachella-stage-during-the-2022-coachella.jpg?s=612x612&w=0&k=20&c=n_XO-JARcK26VaqIku1fmJg4SxXSFl7x9mtsZ658DzY="
      }
    ],
    popularity: 84,
    followers: {
      total: 195665378
    }
  }
];

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
      {sampleUserArtists.map((artist, index) => (
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
