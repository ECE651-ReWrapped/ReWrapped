import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from '../store/index'; // Ensure this path is correct
import SongToPlaylistDialog from '../components/SongToPlaylistDialog'; // Ensure this path is correct

jest.mock('axios');

// Correctly import useSelector for mock configuration
import * as reactRedux from 'react-redux';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

test('renders dialog and fetches playlists successfully', async () => {
    // Setup mock return value for useSelector here
    reactRedux.useSelector.mockImplementation(callback => callback(store.getState()));

    axios.get.mockResolvedValue({
        status: 200,
        data: {
            playlists: [
                { playlist_name: 'Playlist 1' },
                { playlist_name: 'Playlist 2' }
            ],
        },
    });

    render(
        <Provider store={store}>
            <SongToPlaylistDialog songName="Test Song" songArtist="Test Artist" handleCloseDialog={() => { }} />
        </Provider>
    );

    await waitFor(() => {
        expect(screen.getByText('Playlist 1')).toBeInTheDocument();
        expect(screen.getByText('Playlist 2')).toBeInTheDocument();
    });
});


