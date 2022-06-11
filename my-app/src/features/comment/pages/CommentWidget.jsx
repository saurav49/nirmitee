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
      <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-5 border-b-4 active:border-b-0 mb-5 border-emerald-700 hover:border-emerald-500 rounded uppercase mr-5">
        post
      </button>
    </div>
  );
};

export { CommentWidget };
