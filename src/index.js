import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App.js';

import { store } from './store.js';

const container = document.getElementById('root');
const root = createRoot(container);

const configureStore = store;
const persistor = persistStore(configureStore);

root.render(
    <StrictMode>
        <Provider store={configureStore}>
            <PersistGate 
                persistor={persistor}
                loading={<div>Loading...</div>}
            >
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);