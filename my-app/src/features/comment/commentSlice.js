import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  posts: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    handleAddPost: (state, action) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
  },
});

export const { handleAddPost } = commentSlice.actions;
export default commentSlice.reducer;
