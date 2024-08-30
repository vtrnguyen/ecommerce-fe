import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import { thunk } from "redux-thunk";

// combine every reducer to be one
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

// config redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth", "user"], // to pesist
}

// generate persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// generate store with persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, 
        }).concat(thunk), 
});

export const persistor = persistStore(store);
