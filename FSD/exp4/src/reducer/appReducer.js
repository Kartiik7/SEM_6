export const initialState = {
  bookmarks: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      // Avoid duplicates
      if (state.bookmarks.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmarks: state.bookmarks.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_BOOKMARKS':
      return {
        ...state,
        bookmarks: []
      };
    default:
      return state;
  }
};
