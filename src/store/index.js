import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from '../slices/user/access-token-slice';
import userDetailsReducer from '../slices/user/user-details-slice';

const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
    currentUserDetails: userDetailsReducer
  },
});

export { store };
