import { createSlice } from '@reduxjs/toolkit';

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        accessToken: null,
        userId: '',
        seed_top_tracks: [],
        seed_top_artists: []
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setUserId : (state, action) => {
            state.userId = action.payload;
        },
        setTopTracksSeeds: (state, action) => {
            state.seed_top_tracks = action.payload;
        },
        setTopArtistsSeeds: (state, action) => {
            state.seed_top_artists = action.payload;
        }
    },
});

export const spotifyActions = spotifySlice.actions;
export default spotifySlice.reducer;