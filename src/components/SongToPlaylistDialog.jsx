import React from 'react';
import { Button, Dialog, DialogTitle, List, ListItemButton, ListItemText, DialogContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

let playlists = [];

const SongToPlaylistDialog = ({ songName, songArtist, handleCloseDialog }) => {
    const currUserEmail = useSelector(state => state.currentUserDetails.userEmail);
    const [hasPlaylists, setHasPlaylists] = useState(false);

    useEffect(() => {
        // get all of my playlists only, shared or unshared
        const getMyPlaylists = async () => {
            playlists = [];
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_LOCAL}/getSharedPlaylists`, {
                    params: {
                        createdByUserEmail: currUserEmail,
                        sharedWithUsername: undefined // don't set to get all of only my playlists
                    },
                    withCredentials: true,
                });

                if (response.status === 200) {
                    // there are playlists to my name
                    response.data.playlists.map((item) => {
                        playlists.push(item.playlist_name);    
                    });
                    setHasPlaylists(true);
                } else {
                    // I dont have any shared playlists
                }

            } catch (err) {
                console.error("Failed to get user's playlists: ", err);
            }
        };
        getMyPlaylists();
    }, []);

    const handleAddToChosenPlaylist = (selPlaylist) => {
        handleCloseDialog(false);
        setHasPlaylists(false);
        // store this song to the selected playlist in db
        try {
            const res = axios.post(`${process.env.REACT_APP_API_LOCAL}/addTrackToPlaylist`, {
                playlist_name: selPlaylist,
                track_name: songName,
                artist_name: songArtist
            });
        } catch (err) {
            console.error("Failed to add track to the playlist: ", err);
        }
    };

    return (
        <Dialog open={true} onClose={() => handleCloseDialog(false)}>
            <DialogTitle>Choose a playlist to add this song to</DialogTitle>
            <DialogContent>
                <List>
                    {playlists.map((playlist, index) => (
                        <ListItemButton key={index} onClick={ () => handleAddToChosenPlaylist(playlist) }>
                            <ListItemText primary={playlist} />
                        </ListItemButton>
                    ))}
                </List>
                <Button onClick={() => handleCloseDialog(false)}>Done</Button>
            </DialogContent>
        </Dialog>
    )
};

export default SongToPlaylistDialog;
