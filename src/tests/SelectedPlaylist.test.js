import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import SelectedPlaylist from '../components/SelectedPlaylist';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');
const mockedUseParams = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockedUseParams(),
}));

describe('SelectedPlaylist Component', () => {
    beforeEach(() => {
        // Setup mock return values before each test
        mockedUseParams.mockReturnValue({ playlist_name: 'Test Playlist' });
        axios.get.mockResolvedValue({
            data: {
                tracks: [
                    { track_name: 'Track 1', artist_name: 'Artist 1' },
                    { track_name: 'Track 2', artist_name: 'Artist 2' },
                ],
            },
        });
    });

    afterEach(() => {
        // Clear all mocks after each test
        jest.clearAllMocks();
    });

    test('displays tracks when data is fetched successfully', async () => {
        render(
            <Router>
                <SelectedPlaylist />
            </Router>
        );

        // Wait for the component to finish loading data
        const elem1 = screen.findByText('Track 1');
        const elem2 = screen.findByText('Artist 1');
        const elem3 = screen.findByText('Track 2');
        const elem4 = screen.findByText('Artist 2');
        elem1.then(() => {
            expect(elem1).toBeInTheDocument();
        });

        elem2.then(() => {
            expect(elem2).toBeInTheDocument();
        });
        elem3.then(() => {
            expect(elem3).toBeInTheDocument();
        });
        elem4.then(() => {
            expect(elem4).toBeInTheDocument();
        });
    });

    test('displays a message when the playlist has no tracks', async () => {
        // Mock an empty list of tracks
        axios.get.mockResolvedValue({
            data: { tracks: [] },
        });

        render(<Router>
            <SelectedPlaylist />
        </Router>);

        // Expect to find a message indicating there are no tracks
        const message = await screen.findByText('This playlist has no tracks!');
        expect(message).toBeInTheDocument();
    });
});

