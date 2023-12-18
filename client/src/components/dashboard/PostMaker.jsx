import React from "react";
import { Icon } from "@iconify/react";
import AddPost from "./AddPost";
import AddVideo from "./AddVideo";

const PostMaker = (props) => {
  return (
    <div className="flex gap-2 lg:gap-8 p-2 lg:m-4">
      {/* Post + Video Container */}
      <AddPost user={props.user} />
      <AddVideo user={props.user} />
    </div>
  );
};

export default PostMaker;
