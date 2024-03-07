import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function TopSongCard({ mData }) {
  return (
    <div>
    <ListItem>
        <ListItemAvatar>
            <Avatar alt="album art" src={mData.thumbnail} />
        </ListItemAvatar>
        <ListItemText
            primary={mData.songName}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {mData.artist}
                    </Typography>
                    {" -  "} {mData.genres}
                </React.Fragment>
            }
        />
    </ListItem>
</div>
  );
};

export default TopSongCard;
