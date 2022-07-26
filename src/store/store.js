import {configureStore} from '@reduxjs/toolkit';
import newsSlice from './slices/news';
import booksSlice from './slices/books';
import componentsPositionSlice from './slices/componentsPosition';

export default configureStore({
  reducer: {
    news: newsSlice,
    books: booksSlice,
    componentsPosition: componentsPositionSlice,
  },
});
