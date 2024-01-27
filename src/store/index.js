import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // You can configure any other options here
};

const rootReducer = combineReducers({

});

const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: [...getDefaultMiddleware(), logger], // Include logger middleware
});

const persistor = persistStore(store);

export { store, persistor };
