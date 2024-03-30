import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Box, Typography } from '@mui/material';
import axios from 'axios';

const SelectedPlaylist = () => {
    const { playlist_name } = useParams();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/getAllTracksFromPlaylist`, {
                    params: {
                        playlist_name: playlist_name
                    },
                    withCredentials: true,
                });

                if (res.status === 200) {
                    if (res.data.tracks.length === 0) {
                        setTracks([]);
                    } else {
                        const formattedTracks = res.data.tracks.map((item) => ({
                            track: item.track_name,
                            artist: item.artist_name
                        }));
                        setTracks(formattedTracks);
                    }
                } else {
                    console.log("Failed to get tracks from playlist.");
                }
            } catch (err) {
                console.error("Failed to get tracks from playlist: ", err);
            }
        };

        fetchApiData();
    }, [playlist_name]);

    return (
        <>
            <Typography
                padding="5px"
                style={{ fontFamily: "sans-serif", fontWeight: 'bold', textAlign: 'center' }}
                variant="h4"
                marginTop="30px"
                gutterBottom
            >
                Songs in this playlist
            </Typography>
            {tracks.length > 0 ? (
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: '30px' }}>
                    <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#F0F2F5' }}>
                        {tracks.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar sx={{ padding: '10px' }}>
                                        <Avatar alt={item.artist} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.track}
                                        secondary={item.artist}
                                        sx={{ padding: '10px' }}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            ) : (
                <p>This playlist has no tracks!</p>
            )}
        </>
    );
};

export default SelectedPlaylist;
