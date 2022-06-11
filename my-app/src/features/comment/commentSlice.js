import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    handleAddComment: (state, action) => {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    },
  },
});

export const { handleAddComment } = commentSlice.actions;
export default commentSlice.reducer;
