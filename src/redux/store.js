import { configureStore } from '@reduxjs/toolkit'
import recipeApi from './api/recipeApi';

const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(recipeApi.middleware)
    },
});

export default store;