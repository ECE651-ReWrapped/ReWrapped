import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from '../slices/user/access-token-slice';

const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
  },
});

export { store };
