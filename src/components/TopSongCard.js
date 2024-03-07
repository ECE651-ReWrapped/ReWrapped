import React from 'react';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { CiCirclePlus } from "react-icons/ci";
import IconButton from '@mui/material/IconButton';

function TopSongCard({ mData }) {
    const cardStyle = {
        backgroundColor: '#F0F2F5',
        borderRadius: '12px',
        padding: '10px',
        marginBottom: '20px',
    };

    return (
        <div style={cardStyle}>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <CiCirclePlus />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar alt="album art" src={mData.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                    primary={mData.songName}
                    secondary= {mData.artist+ " - " + mData.genres}
                />
            </ListItem>
        </div>
    );
};

export default TopSongCard;
