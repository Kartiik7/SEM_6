import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
  categoryFilter: 'All',
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const exists = state.bookmarks.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.bookmarks.push(action.payload);
      }
    },
    removeEvent: (state, action) => {
      state.bookmarks = state.bookmarks.filter((item) => item.id !== action.payload);
    },
    clearBookmarks: (state) => {
      state.bookmarks = [];
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const { addEvent, removeEvent, clearBookmarks, setCategoryFilter } = scheduleSlice.actions;

export default scheduleSlice.reducer;
