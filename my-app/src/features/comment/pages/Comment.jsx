import React from "react";

const Comment = ({ post, comments }) => {
  console.log(comments);
  return (
    <div>
      <h2>{post}</h2>
    </div>
  );
};

export { Comment };
