import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserProfile from '../pages/Profile';

describe("User Profile page tests", () => {
    test("renders user profile page content", () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <UserProfile />
            </MemoryRouter>
        );

        // expected blocks
        const artistsBlock = screen.queryByText(/Artists you follow/i);
        expect(artistsBlock).toBeInTheDocument();
        
        const topTracksBlock = screen.queryByText(/Your top tracks/i);
        expect(topTracksBlock).toBeInTheDocument();

        const podcastsBlock = screen.queryByText(/Your saved podcasts/i);
        expect(podcastsBlock).toBeInTheDocument();
        
        const playlistsBlock = screen.queryByText(/Your saved playlists/i);
        expect(playlistsBlock).toBeInTheDocument();
    });
});