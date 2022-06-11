import React from "react";
import { CommentWidget } from "./features/comment/index";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <CommentWidget />
    </div>
  );
}

export default App;
