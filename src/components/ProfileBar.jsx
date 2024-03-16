import { Avatar, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ProfileBar = () => {
    const [spotifyUserData, setSpotifyUserData] = useState();
    const accessToken = useSelector(state => state.spotify.accessToken);
    
    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await axios.get("https://api.spotify.com/v1/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setSpotifyUserData(res.data);
            } catch (err) {
                console.error("Error fetching data: ", err);
            }
        };
        getApiData();
    }, [accessToken]);

    if (!spotifyUserData) {
        return null;
    }

    return (
        <Grid 
            container 
            display={"flex"} 
            direction="column" 
            justifyContent="center"
            alignItems="center" 
            sx={{backgroundColor: '#282828'}}
        >
            <Avatar
            src={spotifyUserData.images[1].url ? spotifyUserData.images[1].url : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"}
            alt="Profile Photo not available"
            sx={{ width: '200px', height: '200px', borderRadius: '50%', 
            '@media (min-width: 600px)' : {
                width: '250px', 
                height: '250px' },
            '@media (min-width: 960px)' : {
                width: '300px', 
                height: '300px' }
            }}
            />
            <Typography variant="h5" 
            sx={{ mt: 2, fontFamily: ['sans-sarif'], color: '#1DB954', fontWeight:'bold', fontSize: '25px',
                '@media (min-width: 600px)' : {
                    fontSize: '40px'
                },
                '@media (min-width: 960px)' : {
                    fontSize: '50px'
                } 
            }}
            >
                {spotifyUserData.display_name}
            </Typography>
            <Typography sx={{color: '#F9F9F9', fontSize: '15px', 
            '@media (min-width: 600px)' : {
                    fontSize: '20px'
                },
            '@media (min-width: 960px)' : {
                    fontSize: '20px'
                } 
            }}
            >
                {spotifyUserData.email}
            </Typography>
            <Typography sx={{ color: '#F9F9F9', fontSize: '15px',
                '@media (min-width: 600px)' : {
                    fontSize: '20px'
                },
                '@media (min-width: 960px)' : {
                    fontSize: '20px'
                } 
            }}>
                {spotifyUserData.country}
            </Typography>
            <Grid 
            container
            display={"flex"}
            direction="row"
            justifyContent="space-around"
            alignItems="space-around"
            >
                <Grid 
                item
                sx={{
                    padding: '10px'
                }}
                display={"flex"}
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Typography sx={{fontSize: '14px', fontFamily: ['sans-sarif'], fontWeight: 'bold', color: '#F9F9F9',
                        '@media (min-width: 600px)' : {
                            fontSize: '16px'
                        },
                        '@media (min-width: 960px)' : {
                            fontSize: '18px'
                        },
                    }}>
                        Followers
                    </Typography>
                    <Typography sx={{color: '#F9F9F9'}}>
                        {spotifyUserData.followers.total}
                    </Typography>
                </Grid>
                <Grid item 
                sx={{
                    padding: '10px'
                }}
                display={"flex"}
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Typography sx={{fontSize: '14px', fontFamily: ['sans-sarif'], fontWeight: 'bold', color: '#F9F9F9',
                    '@media (min-width: 600px)' : {
                        fontSize: '16px'
                    },
                    '@media (min-width: 960px)' : {
                        fontSize: '18px'
                    },
                }}>
                        Subscription
                    </Typography>
                    <Typography sx={{color: '#F9F9F9'}}>
                        {spotifyUserData.product}
                    </Typography>
                </Grid>
                <Grid item 
                sx={{
                    padding: '10px'
                }}
                display={"flex"}
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Typography sx={{fontSize: '14px', fontFamily: ['sans-sarif'], fontWeight: 'bold', color: '#F9F9F9',
                    '@media (min-width: 600px)' : {
                            fontSize: '16px'
                        },
                    '@media (min-width: 960px)' : {
                            fontSize: '18px'
                        },
                    }}
                    >
                        Spotify ID
                    </Typography>
                    <Typography sx={{color: '#F9F9F9'}}>
                        {spotifyUserData.id.substring(0, 11)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileBar;