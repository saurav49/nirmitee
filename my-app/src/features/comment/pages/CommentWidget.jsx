import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAddPost } from "../commentSlice";
import { nanoid } from "nanoid";
import { Comment } from "./Comment";

const CommentWidget = () => {
  const [post, setPost] = useState("");
  const { posts } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    if (post.length === 0) {
      alert("cannot create post with empty field");
      return;
    }
    dispatch(handleAddPost({ _id: nanoid(), post, comments: [] }));
    setPost("");
  };

  return (
    <>
      <div className="px-3 py-8 rounded-md shadow-md w-300px sm:w-[500px] flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Create Post</h1>
        <div className="flex flex-col items-center sm:flex-row">
          <input
            type="text"
            name="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="border-2 border-slate-300 p-2 rounded-md sm:mr-2"
            placeholder="Add post"
          />
          <button
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-5 border-b-4 active:border-b-0 mt-2 sm:mt-0 border-emerald-700 hover:border-emerald-500 rounded uppercase mr-5"
            onClick={handleCreatePost}
          >
            post
          </button>
        </div>
      </div>
      {posts &&
        Array.isArray(posts) &&
        posts.length > 0 &&
        posts.map(({ _id, post, comments }) => {
          return <Comment key={_id} post={post} comments={comments} />;
        })}
    </>
  );
};

export { CommentWidget };
