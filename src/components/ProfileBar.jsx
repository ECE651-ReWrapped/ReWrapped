import { Avatar, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

// temp data
const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

const sampleProfileData = {
    images: [ 
        { 
            url: "https://media.gettyimages.com/id/501270498/photo/a-dragon-ball-action-figure-during-the-fair-second-edition-of-xmas-comics-and-games-a.jpg?s=612x612&w=0&k=20&c=kO1cNxjXIaa3f5wnMzxuqp1U2nSrSCMV72X-c0_fA68=" 
        },
        { 
            url: "https://media.gettyimages.com/id/501270498/photo/a-dragon-ball-action-figure-during-the-fair-second-edition-of-xmas-comics-and-games-a.jpg?s=612x612&w=0&k=20&c=kO1cNxjXIaa3f5wnMzxuqp1U2nSrSCMV72X-c0_fA68=" 
        }
    ],
    display_name: "John Doe",
    email: 'johndoe@gmail.com',
    country: 'CA',
    followers: { total: 25 },
    product: 'Free',
    id: '834huj23762556ghchbyfg356786'
};

const ProfileBar = () => {
    const [spotifyUserData, setSpotifyUserData] = useState();
    
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
    }, []);

    if (!sampleProfileData) {
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
            src={sampleProfileData.images[1].url}
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
                {sampleProfileData.display_name}
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
                {sampleProfileData.email}
            </Typography>
            <Typography sx={{ color: '#F9F9F9', fontSize: '15px',
                '@media (min-width: 600px)' : {
                    fontSize: '20px'
                },
                '@media (min-width: 960px)' : {
                    fontSize: '20px'
                } 
            }}>
                {sampleProfileData.country}
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
                        {sampleProfileData.followers.total}
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
                        {sampleProfileData.product}
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
                        {sampleProfileData.id.substring(0, 11)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileBar;