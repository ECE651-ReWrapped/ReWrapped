import React from 'react';
import { Dialog, DialogTitle, DialogContent, ListItemButton, List, ListItemText, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

let playlists = [];

const PlaylistDialog = ({ currUser, handleCloseList }) => {
    const currUserEmail = useSelector(state => state.currentUserDetails.userEmail);
    const [isPlaylistEmpty, setPlaylistEmpty] = useState(true); // consider no shared playlists until API call sends a list
    const [enterPlaylist, setEnterPlaylist] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlaylistsFromDb = async () => {
            playlists = [];
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/getSharedPlaylists`, {
                    params: {
                        createdByUserEmail: currUserEmail,
                        sharedWithUsername: currUser
                    },
                    withCredentials: true,
                });

                if (res.status === 404) {
                    // no existing shared playlists
                    setPlaylistEmpty(true);
                } else {
                    setPlaylistEmpty(false);
                    // display existing playlists
                    res.data.playlists.forEach((item) => {
                        playlists.push(item.playlist_name);
                    })
                }
            } catch (err) {
                console.error("Failed to fetch playlists: ", err);
            }
        };
        fetchPlaylistsFromDb();
    }, [currUserEmail, isPlaylistEmpty]);

    const handleCreatePlaylist = () => {
        setEnterPlaylist(true);
    }

    const onDone = async () => {
        setEnterPlaylist(false);
        setPlaylistEmpty(false);
        handleCloseList(false); // close dialog box altogether

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_LOCAL}/createNewSharedPlaylist`,
                {
                    playlist_name: playlistName,
                    createdByEmail: currUserEmail,
                    sharedWithUsername: currUser
                }
            );
        } catch (err) {
            console.error("Failed to create a new playlist: ", err);
        }
    };

    // display playlist tracks in the selected playlist to user
    const handleGetPlaylistTracks = async (selectedPlaylist) => {
        navigate(`/my-playlists/${selectedPlaylist}`);
    };

    return (
        <Dialog open={true} onClose={() => handleCloseList(false)}>
            {!isPlaylistEmpty && !enterPlaylist && <DialogTitle>Your shared playlists</DialogTitle>}
            <DialogContent>
                {!isPlaylistEmpty && !enterPlaylist && <List>
                    {playlists.map((playlist, index) => (
                        <ListItemButton onClick={() => { handleGetPlaylistTracks(playlist); }} key={index}>
                            <ListItemText primary={playlist} />
                        </ListItemButton>
                    ))}
                </List>}
                {enterPlaylist && <TextField value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />}
                {enterPlaylist && <Button onClick={onDone}>Done</Button>}
                {!enterPlaylist && <Button onClick={handleCreatePlaylist}>Create a new Playlist</Button>}
            </DialogContent>
        </Dialog>
    );
};

export default PlaylistDialog;

