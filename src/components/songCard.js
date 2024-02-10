import React from 'react';
import "./songCard.css"

function SongCard({ artist, album, name, albumArt }) {
    return (

        <div>
            <div className="songCard-container">

                <div className="image">
                    <img src={albumArt} alt="Image" style={{ width: '70px', height: '70px' }} />
                </div>

                <div className="column">
                <h3>{name}</h3>
                    <p>Artist: {artist}</p>
                    <p>Album: {album}</p>
                </div>
            </div>
        </div>
    );
}

export default SongCard;