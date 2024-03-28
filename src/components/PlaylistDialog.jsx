import React from 'react';
import { Dialog, DialogTitle, DialogContent, ListItemButton, List, ListItemText } from '@mui/material';

const PlaylistDialog = ({ handleCloseList }) => {
    // Dummy list of playlist names
    const playlists = ['Playlist 1', 'Playlist 2', 'Playlist 3', 'Playlist 4', 'Playlist 5'];

    return (
        <Dialog open={true} onClose={() => handleCloseList(false)}>
            <DialogTitle>Add this song to your playlist</DialogTitle>
            <DialogContent>
                <List>
                    {playlists.map((playlist, index) => (
                        <ListItemButton onClick={() => handleCloseList(false)} key={index}>
                            <ListItemText primary={playlist} />
                        </ListItemButton>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default PlaylistDialog;

