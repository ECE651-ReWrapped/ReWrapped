import React from 'react';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { BsPlusCircleFill } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';

function TopSongCard({ mData }) { // NOSONAR
    const cardStyle = {
        backgroundColor: '#F0F2F5',
        borderRadius: '12px',
        padding: '8px',
        margin: '0 150px'
    };

    return (
        <div style={cardStyle}>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="add">
                        <BsPlusCircleFill style={{ color: '1DB954' }} />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar alt="album art" src={mData.thumbnail} /> {/* NOSONAR */}
                </ListItemAvatar>
                <ListItemText
                    primary={"🎲 - " + mData.songName} // NOSONAR
                    secondary={mData.artist + " - " + mData.genres} // NOSONAR
                />
            </ListItem>
        </div>
    );
};

export default TopSongCard;
