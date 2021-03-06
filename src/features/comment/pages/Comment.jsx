import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { handleDeletePost, handleEdit, handleReply } from "../commentSlice";

const Comment = ({ _id, post, comments }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");

  const handleEditPost = (id) => {
    if (!editComment) {
      alert("edit input field cannot be empty");
      return;
    }
    dispatch(handleEdit({ id, editComment }));
    setEditComment("");
  };

  const handlePostReply = (id) => {
    if (!comment) {
      alert("reply input field cannot be empty");
      return;
    }
    dispatch(handleReply({ id, comment }));
    setComment("");
  };

  return (
    <>
      {post && (
        <div className="px-3 py-8 rounded-md shadow-md w-50 my-2 border-l-8 border-l-emerald-500 bg-white">
          <p className="text-lg">{post}</p>
          <input
            type="text"
            name="comment"
            value={comment}
            placeholder="Reply"
            onChange={(e) => setComment(e.target.value)}
            className="border-2 border-slate-300 p-1 mb-4 rounded-md sm:mr-2"
          />
          <input
            type="text"
            name="comment"
            value={editComment}
            placeholder="Edit Comment"
            onChange={(e) => setEditComment(e.target.value)}
            className="border-2 border-slate-300 p-1 mb-4 rounded-md sm:mr-2"
          />
          <div className="flex justify-end w-full">
            <button
              onClick={() => dispatch(handleDeletePost(_id))}
              className="bg-red-500 hover:bg-red-400 text-sm text-white font-bold py-1 px-3 border-b-4 active:border-b-0 mt-2 sm:mt-0 border-red-700 hover:border-red-500 rounded uppercase mr-5"
            >
              delete
            </button>
            <button
              onClick={() => dispatch(handleEditPost(_id))}
              className="bg-green-500 hover:bg-green-400 text-sm text-white font-bold py-1 px-3 border-b-4 active:border-b-0 mt-2 sm:mt-0 border-green-700 hover:border-green-500 rounded uppercase mr-5"
            >
              edit
            </button>
            <button
              onClick={() => dispatch(handlePostReply(_id))}
              className="bg-blue-500 hover:bg-blue-400 text-sm text-white font-bold py-1 px-3 border-b-4 active:border-b-0 mt-2 sm:mt-0 border-blue-700 hover:border-blue-500 rounded uppercase mr-5"
            >
              comment
            </button>
          </div>
          {comments &&
            Array.isArray(comments) &&
            comments.length > 0 &&
            comments.map(({ post, comments, _id }) => {
              return (
                <Comment post={post} comments={comments} key={_id} _id={_id} />
              );
            })}
        </div>
      )}
    </>
  );
};

export { Comment };
