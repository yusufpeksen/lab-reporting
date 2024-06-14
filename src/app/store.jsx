import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

import reportsReducer from "../features/reports/reportsSlice";
import laborantReducer from "../features/laborant/laborantSlice";

const rootReducer = combineReducers({
  reports: reportsReducer,
  laborants: laborantReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

//persistor.purge().then(() => { // BURASI LOCAL BIR DATABASE GIBI CALISIYOR , SIFIRLANMASINI ISTERSEN CALISTIR
//    console.log('Persisted state has been cleared.');
//  });