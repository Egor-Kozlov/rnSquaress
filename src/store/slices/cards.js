import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
// import Visa from '../../../assets/icons/creditCard/visa.svg';
// import Mastercard from '../../../assets/icons/creditCard/mastercard.svg';
// import Chip from '../../../assets/icons/creditCard/chip.svg';
// import TransparentChip from '../../../assets/icons/creditCard/transparentChip.svg';
// import Background1 from '../../../assets/pictures/creditCard/cardBackground-1.svg';
// import Background2 from '../../../assets/pictures/creditCard/cardBackground-2.svg';
// import Background3 from '../../../assets/pictures/creditCard/cardBackground-3.svg';
// import Background4 from '../../../assets/pictures/creditCard/cardBackground-4.svg';
// import Background5 from '../../../assets/pictures/creditCard/cardBackground-5.svg';

const initialState = {
  value: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.value = [...action.payload];
    },
    deleteCard: (state, action) => {
      state.value = [];
    },
  },
});

export const {addBooks, clearBooks} = cardsSlice.actions;

export default cardsSlice.reducer;
