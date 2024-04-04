import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/user/user-details-slice";

const createTestStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export { createTestStore };
