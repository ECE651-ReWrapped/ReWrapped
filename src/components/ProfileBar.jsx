import React from "react";
import { Avatar, Typography, Grid } from "@mui/material";
import '@fontsource/inter';

const sampleData = {
  display_name: 'User Full Name',
  country: 'Canada',
  email: 'email@email.com',
  images: [
    {
      url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=841872282494341&height=50&width=50&ext=1712000571&hash=AfpxAC3kYkaGuxyr-VWyvlV2FtfdgD6o1kZtGz5cHaV4sA"
    }
  ],
  followers: '19',
  user_id: '1234566',
  subscription_type: 'Free'
};

const ProfileBar = () => {
    return (
        <Grid 
            container 
            display={"flex"} 
            direction="column" 
            justifyContent="center"
            alignItems="center" 
            sx={{backgroundColor: '#EFEFEF'}}
        >
            <Avatar
            src={sampleData.images[0].url}
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
            sx={{ mt: 2, fontFamily: 'Inter', color: '#1DB954', fontWeight:'bold', fontSize: '25px',
                '@media (min-width: 600px)' : {
                    fontSize: '40px'
                },
                '@media (min-width: 960px)' : {
                    fontSize: '50px'
                } 
            }}
            >
                {sampleData.display_name}
            </Typography>
            <Typography sx={{color: 'grey', fontSize: '15px', 
            '@media (min-width: 600px)' : {
                    fontSize: '20px'
                },
            '@media (min-width: 960px)' : {
                    fontSize: '20px'
                } 
            }}
            >
                {sampleData.email}
            </Typography>
            <Typography sx={{ color: 'grey', fontSize: '15px',
                '@media (min-width: 600px)' : {
                    fontSize: '20px'
                },
                '@media (min-width: 960px)' : {
                    fontSize: '20px'
                } 
            }}>
                {sampleData.country}
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
                    <Typography sx={{fontSize: '14px', fontFamily: 'Inter', fontWeight: 'bold', color: 'grey',
                    '@media (min-width: 600px)' : {
                        fontSize: '16px'
                    },
                    '@media (min-width: 960px)' : {
                        fontSize: '18px'
                    },
                }}>
                        Followers
                    </Typography>
                    <Typography sx={{color: 'grey'}}>
                        {sampleData.followers}
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
                    <Typography sx={{fontSize: '14px', fontFamily: 'Inter', fontWeight: 'bold', color: 'grey',
                    '@media (min-width: 600px)' : {
                        fontSize: '16px'
                    },
                    '@media (min-width: 960px)' : {
                        fontSize: '18px'
                    },
                }}>
                        Subscription
                    </Typography>
                    <Typography sx={{color: 'grey'}}>
                        {sampleData.subscription_type}
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
                    <Typography sx={{fontSize: '14px', fontFamily: 'Inter', fontWeight: 'bold', color: 'grey',
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
                    <Typography sx={{color: 'grey'}}>
                        {sampleData.user_id}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileBar;