// TopSongCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import TopSongCard from '../components/TopSongCard';

// Mock data for testing
const mockData = {
  thumbnail: 'https://example.com/thumbnail.jpg',
  songName: 'Example Song',
  artist: 'Example Artist',
  genres: 'Pop, Rock',
};

describe('TopSongCard component', () => {
  it('renders with correct content', () => {
    const { getByAltText, getByText } = render(<TopSongCard mData={mockData} />);

    // Check if the avatar image is rendered with alt text
    const avatarImage = getByAltText('album art');
    expect(avatarImage.src).toBe(mockData.thumbnail);

    // Check if the song name is rendered
    const songName = getByText(`🎲 - ${mockData.songName}`);
    expect(songName).toBeInTheDocument();

    // Check if the artist and genres are rendered in the secondary text
    const secondaryText = getByText(`${mockData.artist} - ${mockData.genres}`);
    expect(secondaryText).toBeInTheDocument();
  });
});
