import { createSlice } from "@reduxjs/toolkit";
import { isDelete, editPost, isPresent } from "../../utils";

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

    handleDeletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.map((post) => isDelete(post, action.payload)),
      };
    },

    handleEdit: (state, action) => {
      return {
        ...state,
        posts: state.posts.map((post) =>
          editPost(action.payload.id, post, action.payload.editComment)
        ),
      };
    },

    handleReply: (state, action) => {
      return {
        ...state,
        posts: state.posts.map((post) =>
          isPresent(post, action.payload.id, action.payload.comment)
        ),
      };
    },
  },
});

export const { handleAddPost, handleDeletePost, handleEdit, handleReply } =
  commentSlice.actions;
export default commentSlice.reducer;
