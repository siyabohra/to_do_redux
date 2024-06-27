import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../feature/card/cardSlice';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
});

export default store;
