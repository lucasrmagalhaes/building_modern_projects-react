import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import { todos } from './todos/reducers';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const reducers = combineReducers ({ todos });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});