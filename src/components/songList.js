import React from 'react';
import SongCard from './songCard';

function SongList({ musicData }) {
    return (
        <div>
            {musicData.map((music, index) => (
                <SongCard
                    name={music.name}
                    artist={music.artist}
                    album={music.album}
                    albumArt={music.albumArt}
                />
            ))}
        </div>
    );
}

export default SongList;