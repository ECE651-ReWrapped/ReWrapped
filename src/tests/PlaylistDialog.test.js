import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import PlaylistDialog from '../components/PlaylistDialog';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from '../slices/user/access-token-slice';
import userDetailsReducer from '../slices/user/user-details-slice';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// Create a helper function to configure the store for testing
const createStore = (initialState) => configureStore({
    reducer: {
        spotify: spotifyReducer,
        currentUserDetails: userDetailsReducer,
    },
    preloadedState: initialState,
});

const renderWithRedux = (
    component,
    initialState = {}
) => {
    const store = createStore(initialState);
    return {
        ...render(<Provider store={store}><BrowserRouter>{component}</BrowserRouter></Provider>),
        store,
    }
};

const renderWithReduxAndRouter = (component, initialState = {}) => {
    const store = createStore(initialState);
    return render(
        <Provider store={store}>
            <BrowserRouter>{component}</BrowserRouter>
        </Provider>
    );
};

// tests begin 
test('renders shared playlists', async () => {
    // Mock data returned by axios
    const playlistsData = {
        data: {
            playlists: [
                { playlist_name: 'Chill Vibes' },
                { playlist_name: 'Workout Hits' },
            ]
        }
    };

    // Mock axios.get to resolve with mock data
    axios.get.mockResolvedValue(playlistsData);

    const initialState = {
        currentUserDetails: { userEmail: 'user@example.com' }
    };

    // Use the modified renderWithRedux function
    const { findByText } = renderWithRedux(<PlaylistDialog />, initialState);

    const expectElement1 = findByText('Chill Vibes');
    const expectElement2 = findByText('Workout Hits');

    expectElement1.then(() => {
        expect(expectElement1).toBeInTheDocument();
    });

    expectElement2.then(() => {
        expect(expectElement2).toBeInTheDocument();
    });
});

test('displays UI for creating a new playlist on button click', async () => {
    const initialState = { currentUserDetails: { userEmail: 'user@example.com' } };
    renderWithRedux(<PlaylistDialog />, initialState);

    userEvent.click(screen.getByText('Create a new Playlist'));
    await waitFor(() => {
        expect(screen.getByLabelText('Outlined')).toBeInTheDocument();
    });
});

test('updates state on new playlist name input', async () => {
    const initialState = { currentUserDetails: { userEmail: 'user@example.com' } };
    renderWithRedux(<PlaylistDialog />, initialState);

    userEvent.click(screen.getByText('Create a new Playlist'));
    await waitFor(() => {
        const input = screen.getByLabelText('Outlined');
        userEvent.type(input, 'My New Playlist');
        expect(input.value).toBe('My New Playlist');
    });
});

test('navigates to the playlist tracks page on playlist selection', async () => {
    const playlistsData = {
        data: {
            playlists: [{ playlist_name: 'Test playlist' }]
        }
    };
    axios.get.mockResolvedValue(playlistsData);
    const initialState = {
        currentUserDetails: { userEmail: 'user@example.com' }
    };

    renderWithReduxAndRouter(<PlaylistDialog />, initialState);

    // Wait for the playlist item to appear and then click it
    const playlistItem = await screen.findByText('Test playlist');
    userEvent.click(playlistItem);

    await waitFor(() => {
        // Verify that navigation was called with the correct path
        expect(mockNavigate).toHaveBeenCalledWith('/my-playlists/Test playlist');
    });
});


