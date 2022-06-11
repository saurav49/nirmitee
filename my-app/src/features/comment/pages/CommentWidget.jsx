import { useState } from "react";

const CommentWidget = () => {
  const [comment, setComment] = useState("");
  return (
    <div>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button></button>
    </div>
  );
};

export { CommentWidget };
