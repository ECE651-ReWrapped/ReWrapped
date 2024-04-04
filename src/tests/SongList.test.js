import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SongList from '../components/songList';

const musicData = [
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    },
    {
        track_name: "Cut To The Feeling",
        artists: "Carly Rae Jepsen",
        album: "Cut To The Feeling",
        albumArt:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        genres: "Alt Rock"
    }
]

describe('SongList component', () => {
    it('renders table with correct number of SongCard components', () => {
        const { getAllByTestId } = render(<SongList musicData={musicData} />);

        
        const tableContainer = getAllByTestId('table-container');
        expect(tableContainer).toHaveLength(1);

        
        const songCards = getAllByTestId('song-card');
        expect(songCards).toHaveLength(musicData.length);
    });
});
