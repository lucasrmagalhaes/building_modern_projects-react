import { configureStore } from '@reduxjs/toolkit';

import { todos } from './todos/reducers';

export const store = configureStore({
    reducer: {
        todos
    }
});