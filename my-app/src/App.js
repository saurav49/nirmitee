import React from "react";
import { CommentWidget } from "./features/comment/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-4">
        <CommentWidget />
      </div>
    </div>
  );
}

export default App;
