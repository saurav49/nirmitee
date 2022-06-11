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

function editPost(id, post, editPost) {
  if (!post.hasOwnProperty("_id")) {
    return;
  }

  return post._id === id
    ? { ...post, post: editPost }
    : {
        ...post,
        comments: post.comments.map((comment) => editPost(id, comment)),
      };
}

export { isDelete, editPost };
