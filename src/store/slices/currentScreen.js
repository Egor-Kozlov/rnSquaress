import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const currentScreenSlice = createSlice({
  name: 'currentScreen',
  initialState,
  reducers: {
    changeScreen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {changeScreen} = currentScreenSlice.actions;

export default currentScreenSlice.reducer;
