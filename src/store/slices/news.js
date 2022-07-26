import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    clearNews: (state, action) => {
      state.value = [];
    },
  },
});

export const {addNews, clearNews} = newsSlice.actions;

export default newsSlice.reducer;
