import React from 'react';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function SongCard({ artist, album, name, albumArt, cIndex }) {
    if(cIndex !== 6) {
        return (
            <div>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="album art" src={albumArt} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {artist}
                                </Typography>
                                {" -  "} {album}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />
            </div>
        );
    } else {
        return (
            <div>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="album art" src={albumArt} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {artist}
                                </Typography>
                                {" -  "} {album}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        );
    }
}

export default SongCard;