import { nanoid } from "nanoid";

const isDelete = (post, _id) => {
  if (!post.hasOwnProperty("_id")) {
    return post;
  }
  return post._id === _id
    ? {}
    : {
        ...post,
        comments: post.comments.map((comment) => isDelete(comment, _id)),
      };
};

const editPost = (id, post, editPost) => {
  if (!post.hasOwnProperty("_id")) {
    return;
  }

  return post._id === id
    ? { ...post, post: editPost }
    : {
        ...post,
        comments: post.comments.map((comment) => editPost(id, comment)),
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
        comments: post.comments.map((comment) => isPresent(comment, _id)),
      };
};

export { isDelete, editPost, isPresent };
