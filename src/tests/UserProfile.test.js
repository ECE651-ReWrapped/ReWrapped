import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserProfile from '../pages/Profile';
import { store } from '../store/index';
import { Provider } from "react-redux";
import FollowingArtists from '../components/FollowingArtists';
import SavedShows from '../components/SavedShows';
import TopTracks from '../components/TopTracks';
import UserPlaylists from '../components/UserPlaylists';
import ProfileBar from '../components/ProfileBar';
import axios from 'axios';


jest.mock('axios');

describe("User Profile page tests", () => {
    test("renders user profile page content", () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <Provider store={store}>
                    <UserProfile />
                </Provider>
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


describe('FollowingArtists component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                items: [
                    {
                        name: 'Artist 1',
                        images: [{ url: 'artist1.jpg' }],
                        popularity: 80,
                        followers: { total: 1000 },
                    },
                    {
                        name: 'Artist 2',
                        images: [{ url: 'artist2.jpg' }],
                        popularity: 70,
                        followers: { total: 500 },
                    },
                ],
            },
        });
    });

    test('renders artist names', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <FollowingArtists />
            </Provider>
        );
        const artist1Name = await findByText('Artist 1');
        const artist2Name = await findByText('Artist 2');

        expect(artist1Name).toBeInTheDocument();
        expect(artist2Name).toBeInTheDocument();
    });

    test('renders artist popularity', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <FollowingArtists />
            </Provider>
        );
        const artist1Popularity = await findByText(/Popularity: 80/);
        const artist2Popularity = await findByText(/Popularity: 70/);

        expect(artist1Popularity).toBeInTheDocument();
        expect(artist2Popularity).toBeInTheDocument();
    });

    test('renders artist followers count', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <FollowingArtists />
            </Provider>
        );
        const artist1Followers = await findByText(/Followers: 1000/);
        const artist2Followers = await findByText(/Followers: 500/);

        expect(artist1Followers).toBeInTheDocument();
        expect(artist2Followers).toBeInTheDocument();
    });
});

describe('SavedShows component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                items: [
                    {
                        show: {
                            name: 'Show 1',
                            images: [{ url: 'show1.jpg' }],
                            publisher: 'Publisher 1',
                            languages: ['English'],
                        },
                    },
                    {
                        show: {
                            name: 'Show 2',
                            images: [{ url: 'show2.jpg' }],
                            publisher: 'Publisher 2',
                            languages: ['Spanish'],
                        },
                    },
                ],
            },
        });
    });

    test('renders show names', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <SavedShows />
            </Provider>
        );
        const show1Name = await findByText('Show 1');
        const show2Name = await findByText('Show 2');

        expect(show1Name).toBeInTheDocument();
        expect(show2Name).toBeInTheDocument();
    });

    test('renders show publishers', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <SavedShows />
            </Provider>
        );
        const show1Publisher = await findByText(/Publisher 1/);
        const show2Publisher = await findByText(/Publisher 2/);

        expect(show1Publisher).toBeInTheDocument();
        expect(show2Publisher).toBeInTheDocument();
    });

    test('renders show languages', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <SavedShows />
            </Provider>
        );
        const show1Language = await findByText(/Language: English/);
        const show2Language = await findByText(/Language: Spanish/);

        expect(show1Language).toBeInTheDocument();
        expect(show2Language).toBeInTheDocument();
    });
});


describe('TopTracks component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                items: [
                    {
                        name: 'Track 1',
                        album: {
                            images: [{ url: 'track1.jpg' }],
                        },
                        artists: [{ name: 'Artist 1' }],
                        popularity: 80,
                    },
                    {
                        name: 'Track 2',
                        album: {
                            images: [{ url: 'track2.jpg' }],
                        },
                        artists: [{ name: 'Artist 2' }],
                        popularity: 70,
                    },
                ],
            },
        });
    });

    test('renders track names', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <TopTracks />
            </Provider>
        );
        const track1Name = await findByText('Track 1');
        const track2Name = await findByText('Track 2');

        expect(track1Name).toBeInTheDocument();
        expect(track2Name).toBeInTheDocument();
    });

    test('renders track artists', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <TopTracks />
            </Provider>
        );
        const track1Artist = await findByText(/Artist 1/);
        const track2Artist = await findByText(/Artist 2/);

        expect(track1Artist).toBeInTheDocument();
        expect(track2Artist).toBeInTheDocument();
    });

    test('renders track popularity', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <TopTracks />
            </Provider>
        );
        const track1Popularity = await findByText(/Popularity: 80/);
        const track2Popularity = await findByText(/Popularity: 70/);

        expect(track1Popularity).toBeInTheDocument();
        expect(track2Popularity).toBeInTheDocument();
    });
});


describe('UserPlaylists component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                items: [
                    {
                        name: 'Playlist 1',
                        images: [{ url: 'playlist1.jpg' }],
                        owner: { display_name: 'User 1' },
                        tracks: { total: 10 },
                    },
                    {
                        name: 'Playlist 2',
                        images: [{ url: 'playlist2.jpg' }],
                        owner: { display_name: 'User 2' },
                        tracks: { total: 20 },
                    },
                ],
            },
        });
    });

    test('renders playlist names', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <UserPlaylists />
            </Provider>
        );
        const playlist1Name = await findByText('Playlist 1');
        const playlist2Name = await findByText('Playlist 2');

        expect(playlist1Name).toBeInTheDocument();
        expect(playlist2Name).toBeInTheDocument();
    });

    test('renders playlist owners', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <UserPlaylists />
            </Provider>
        );
        const playlist1Owner = await findByText(/User 1/);
        const playlist2Owner = await findByText(/User 2/);

        expect(playlist1Owner).toBeInTheDocument();
        expect(playlist2Owner).toBeInTheDocument();
    });

    test('renders playlist popularity', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <UserPlaylists />
            </Provider>
        );
        const playlist1Popularity = await findByText(/Popularity: 10/);
        const playlist2Popularity = await findByText(/Popularity: 20/);

        expect(playlist1Popularity).toBeInTheDocument();
        expect(playlist2Popularity).toBeInTheDocument();
    });
});

describe('ProfileBar component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValueOnce({
            data: {
                display_name: 'John Doe',
                email: 'johndoe@example.com',
                country: 'US',
                followers: { total: 100 },
                product: 'premium',
                id: '1234567890abcdefghi',
                images: [{ url: 'profile-photo.jpg' }, { url: 'profile-photo.jpg' }],
            },
        });
    });

    test('renders user data correctly', async () => {
        const { findByText } = render(
        <Provider store={store} >
            <ProfileBar />
        </Provider>
        );

        expect(await findByText('John Doe')).toBeInTheDocument();
        expect(await findByText('johndoe@example.com')).toBeInTheDocument();
        expect(await findByText('US')).toBeInTheDocument();
        expect(await findByText('100')).toBeInTheDocument();
        expect(await findByText('premium')).toBeInTheDocument();
        expect(await findByText('1234567890a')).toBeInTheDocument(); 
    });

    test('renders default profile photo if user photo is not available', async () => {
        axios.get.mockResolvedValueOnce({
            data: {
                display_name: 'Jane Doe',
                email: 'janedoe@example.com',
                country: 'UK',
                followers: { total: 50 },
                product: 'free',
                id: 'abcdefghij0123456789',
                images: [],
            },
        });

        const { findByAltText } = render(
            <Provider store={store} >
                <ProfileBar />
            </Provider>
        );

        const profilePhoto = await findByAltText('Profile Photo not available');
        expect(profilePhoto).toBeInTheDocument();
    });

    test('renders null if spotifyUserData is null', async () => {
        // Mocking null spotifyUserData
        axios.get.mockResolvedValueOnce({
            data: null,
        });

        const { container } = render(
            <Provider store={store} >
                <ProfileBar />
            </Provider>
        );
        expect(container.firstChild).toBeNull();
    });
});