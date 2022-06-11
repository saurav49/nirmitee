import { nanoid } from "nanoid";

const isDelete = (post, _id) => {
  if (!post.hasOwnProperty("_id")) {
    return post;
  }
  return (
    post._id !== _id && {
      ...post,
      comments: post.comments.map((comment) => isDelete(comment, _id)),
    }
  );
};

const editPost = (id, post, editPostText) => {
  if (!post.hasOwnProperty("_id")) {
    return post;
  }

  return post._id === id
    ? { ...post, post: editPostText }
    : {
        ...post,
        comments: post.comments.map((comment) =>
          editPost(id, comment, editPostText)
        ),
      };
};

const isPresent = (post, _id, reply) => {
  if (!post.hasOwnProperty("_id")) {
    return post;
  }
  return post._id === _id
    ? {
        ...post,
        comments: [
          ...post.comments,
          { _id: nanoid(), post: reply, comments: [] },
        ],
      }
    : {
        ...post,
        comments: post.comments.map((comment) =>
          isPresent(comment, _id, reply)
        ),
      };
};

export { isDelete, editPost, isPresent };
