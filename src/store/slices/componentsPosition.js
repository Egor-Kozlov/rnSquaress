import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const componentsPositionSlice = createSlice({
  name: 'componentsPosition',
  initialState,
  reducers: {
    addComponentsPosition: (state, action) => {
      state.value = {
        ...state.value,
        [action.payload.componentName]: action.payload.position,
      };
    },
  },
});

export const {addComponentsPosition} = componentsPositionSlice.actions;

export default componentsPositionSlice.reducer;
