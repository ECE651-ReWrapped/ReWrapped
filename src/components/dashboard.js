import React from 'react';
import SideNav from './sidenav';
import SongList from './songList';
import Typography from '@mui/material/Typography';

// todo: temp data until backend is done

const sampleSongData = [
    {
        "name": "Cut To The Feeling",
        "artist": "Carly Rae Jepsen",
        "album": "Cut To The Feeling",
        "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
    },
    {
        "name": "Cut To The Feeling",
        "artist": "Carly Rae Jepsen",
        "album": "Cut To The Feeling",
        "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
    },
    {
        "name": "Cut To The Feeling",
        "artist": "Carly Rae Jepsen",
        "album": "Cut To The Feeling",
        "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
    },
    {
        "name": "Cut To The Feeling",
        "artist": "Carly Rae Jepsen",
        "album": "Cut To The Feeling",
        "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
    },
    {
        "name": "Cut To The Feeling",
        "artist": "Carly Rae Jepsen",
        "album": "Cut To The Feeling",
        "albumArt": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1"
    }

]

function Dashboard() {
    return (
        <div>
            <SideNav />
            <div className="main">
                <Typography variant="h1" gutterBottom>
                    ReWrapped.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>Listen with your friends and discover new music</Typography>
                <div className='col'>
                    <div className="row my-5">
                        <div className="col">
                            <h2>Top Songs from your friends</h2>
                            <SongList musicData={sampleSongData} />
                        </div>
                        <div className="col">
                            <h2>Based on your groups listening history</h2>
                            <SongList musicData={sampleSongData} />
                        </div>
                    </div>
                    <div className="row my-5">
                        <h3> Analytics - Charts</h3>
                        <ul>
                            <li>Compare all friends listening time</li>
                            <li>Item B</li>
                            <li>Item C</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;