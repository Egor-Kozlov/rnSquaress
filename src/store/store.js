import {configureStore} from '@reduxjs/toolkit';
import newsSlice from './slices/news';
import booksSlice from './slices/books';
import componentsPositionSlice from './slices/componentsPosition';
import currentScreenSlice from './slices/currentScreen';
import cardsSlice from './slices/cards';

export default configureStore({
  reducer: {
    news: newsSlice,
    books: booksSlice,
    componentsPosition: componentsPositionSlice,
    currentScreen: currentScreenSlice,
    cards: cardsSlice,
  },
});
