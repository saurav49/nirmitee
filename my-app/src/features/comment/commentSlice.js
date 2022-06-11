import { createSlice } from "@reduxjs/toolkit";
import { isDelete, editPost } from "../../utils";

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
      if (!action.payload) {
        alert("edit input field cannot be empty");
        return;
      }

      return {
        ...state,
        posts: state.posts.map((post) =>
          editPost(action.payload.id, post, action.payload.editPost)
        ),
      };
    },
  },
});

export const { handleAddPost, handleDeletePost, handleEdit } =
  commentSlice.actions;
export default commentSlice.reducer;
