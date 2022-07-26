import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.value = [...action.payload];
    },
    clearBooks: (state, action) => {
      state.value = [];
    },
  },
});

export const {addBooks, clearBooks} = booksSlice.actions;

export default booksSlice.reducer;
