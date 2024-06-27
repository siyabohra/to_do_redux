import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.push({ id: state.length + 1, title: action.payload, lists: [] });
        },
        addList: (state, action) => {
            const { cardIndex, newList } = action.payload;
            state[cardIndex].lists.push(newList);
        },
        removeCard: (state, action) => {
            return state.filter((v, index) => index !== action.payload);
        },
        moveList: (state, action) => {
            const { sourceCardIndex, sourceListIndex, targetCardIndex, targetListIndex } = action.payload;
            const sourceList = state[sourceCardIndex].lists[sourceListIndex];
            state[sourceCardIndex].lists.splice(sourceListIndex, 1);
            state[targetCardIndex].lists.splice(targetListIndex, 0, sourceList);
        },
    },
});

export const { addCard, addList, removeCard, moveList } = cardsSlice.actions;
export default cardsSlice.reducer;
