import React from "react";
import { Icon } from "@iconify/react";
import AddPost from "./AddPost";
import AddVideo from "./AddVideo";

const PostMaker = () => {
  return (
    <div className="flex gap-8 m-4">
      {/* Post + Video Container */}
      <AddPost />
      <AddVideo />
    </div>
  );
};

export default PostMaker;
