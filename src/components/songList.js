import React from 'react';
import SongCard from './songCard';
import { List, Container } from '@mui/material';

function SongList({ musicData }) {
    return (
        <Container maxWidth="sm" style={{ borderRadius: '10px', border: '2px solid #ccc'}}>
            <List>
                {musicData.slice(0,10).map((music, index) => (
                    <SongCard
                        name={music.track_name}
                        artist={music.artists}
                        album={""}
                        albumArt={''}
                        // album={music.album}
                        // albumArt={music.albumArt}
                    />
                ))}
            </List>
        </Container>
    );
}

export default SongList;