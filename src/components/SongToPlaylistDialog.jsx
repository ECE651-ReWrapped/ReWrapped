import React from 'react';
import { Button, Dialog, DialogTitle, List, ListItemButton, ListItemText, DialogContent } from '@mui/material';

const playlists = ["Playlist 1", "Playlist 2"];

const SongToPlaylistDialog = ({ handleCloseDialog }) => {
    return (
        <Dialog open={true} onClose={() => handleCloseDialog(false)}>
            <DialogTitle>Choose a playlist to add this song to</DialogTitle>
            <DialogContent>
                <List>
                    {playlists.map((playlist, index) => (
                        <ListItemButton key={index}>
                            <ListItemText primary={playlist} />
                        </ListItemButton>
                    ))}
                </List>
                <Button onClick={ () => handleCloseDialog(false) }>Done</Button>
            </DialogContent>
        </Dialog>
    )
};

export default SongToPlaylistDialog;
