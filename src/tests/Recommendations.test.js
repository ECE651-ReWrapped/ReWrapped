// Recommendations.test.js
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Recommendations from '../pages/Recommendations';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../__mocks__/store';
import { mockAxios } from '../../__mocks__/axios';

const initialState = {
    spotify: {
        seed_top_artists: ['artist1', 'artist2'],
        seed_top_tracks: ['track1', 'track2'],
        accessToken: 'token123',
    },
};

describe('Recommendations Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        mockAxios.reset();
    });

    test('renders loading state initially', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Recommendations />
                </Router>
            </Provider>
        );
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('renders recommendations after successful API call', async () => {
        const responseData = {
            tracks: [
                { name: "Song 1", artists: [{ name: "Artist 1" }], album: { images: [{ url: "image1.url" }] } },
                // Add more mock tracks as needed
            ],
        };
        mockAxios.onGet("https://api.spotify.com/v1/recommendations").reply(200, responseData);

        render(
            <Provider store={store}>
                <Router>
                    <Recommendations />
                </Router>
            </Provider>
        );

        await waitFor(() => expect(screen.getByText("Song 1")).toBeInTheDocument());
    });

    test('navigates to the next recommendation when the next button is clicked', async () => {
        const responseData = {
            tracks: [
                { name: "Song 1", artists: [{ name: "Artist 1" }], album: { images: [{ url: "image1.url" }] } },
                { name: "Song 2", artists: [{ name: "Artist 2" }], album: { images: [{ url: "image2.url" }] } },
            ],
        };
        mockAxios.onGet("https://api.spotify.com/v1/recommendations").reply(200, responseData);

        render(
            <Provider store={store}>
                <Router>
                    <Recommendations />
                </Router>
            </Provider>
        );

        await waitFor(() => expect(screen.getByText("Song 1")).toBeInTheDocument());
        const allButtons = screen.getAllByRole('button', { name: "Next song" });
        expect(allButtons.length).toBe(2);
        const nextButton = allButtons[1];
        const prevButton = allButtons[0];
        fireEvent.click(nextButton);
        fireEvent.click(prevButton);

    });
});
