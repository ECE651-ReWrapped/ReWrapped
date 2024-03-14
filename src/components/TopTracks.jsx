import { useState, useEffect } from "react";
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import axios from "axios";
import { useStyles } from "../styles/profilePageData";

// temp data
const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

const sampleTopTracks = [
  {
    name: "Blinding Lights",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1300911517/photo/tampa-florida-in-this-image-released-on-february-7th-the-weeknd-rehearses-for-the-super-bowl.jpg?s=612x612&w=0&k=20&c=SWGR7MdXhsQl7DPQBhsj3L90Wj4wI9Fb0iCBL5gm2QI=" }]
    },
    artists: [
      {
        name: "The Weeknd"
      }
    ],
    popularity: 95
  },
  {
    name: "Levitating (feat. DaBaby)",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1412160550/photo/montreal-quebec-dua-lipa-performs-at-the-osheaga-music-and-arts-festival-at-parc-jean-drapeau.jpg?s=612x612&w=0&k=20&c=HadKbLwh4FPFlW1EQQTik_Qa7DMI29U3okZScleoGBI=" }]
    },
    artists: [
      {
        name: "Dua Lipa"
      }
    ],
    popularity: 90
  },
  {
    name: "drivers license",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1389382343/photo/las-vegas-nevada-olivia-rodrigo-performs-onstage-during-the-64th-annual-grammy-awards-at-mgm.jpg?s=612x612&w=0&k=20&c=uA-MhIVLfuWK_K9psfTkNCKjAVSMG6Ek9Xd7OaqnGQg=" }]
    },
    artists: [
      {
        name: "Olivia Rodrigo"
      }
    ],
    popularity: 88
  },
  {
    name: "Dynamite",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1146368849/photo/las-vegas-nevada-bts-perform-onstage-during-the-2019-billboard-music-awards-at-mgm-grand.jpg?s=612x612&w=0&k=20&c=r8a2hkx5vhKJUP8BHj8yo0OqehbSebxW1b8pn-ZLoTw=" }]
    },
    artists: [
      {
        name: "BTS"
      }
    ],
    popularity: 92
  },
  {
    name: "Therefore I Am",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1344525823/photo/austin-texas-billie-eilish-performs-onstage-during-austin-city-limits-festival-at-zilker-park.jpg?s=612x612&w=0&k=20&c=vVq1XBxqylFkwKNkae-vaTGs8TyHgCHrd2L5u3w15kc=" }]
    },
    artists: [
      {
        name: "Billie Eilish"
      }
    ],
    popularity: 89
  },
  {
    name: "Mood (feat. iann dior)",
    album: {
      images: [{ url: "https://media.gettyimages.com/id/1351234477/photo/los-angeles-california-rapper-24kgoldn-performs-onstage-during-the-road-to-el-dorado-tour-at.jpg?s=612x612&w=0&k=20&c=dPDbuj2y7VUrjAwk-LNHwMqccvlqKmP5vj5fpQB4XUw=" }]
    },
    artists: [
      {
        name: "24kGoldn"
      }
    ],
    popularity: 91
  }
];


const TopTracks = () => {
  const classes = useStyles();
  const [userTopTracks, setUserTopTracks] = useState([]);

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
  }, []);

  return (
    <Grid container spacing={2} >
      {sampleTopTracks.map((track, index) => (
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
    </Grid>
  );
};

export default TopTracks;
