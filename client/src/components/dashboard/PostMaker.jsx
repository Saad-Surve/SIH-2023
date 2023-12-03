import React from "react";
import { Icon } from "@iconify/react";

const PostMaker = () => {
  return (
    <div className="flex gap-8 m-4">
      {/* Post + Video Container */}
      <div className="w-full py-2 bg-light-blue rounded-3xl flex justify-between items-center shadow-sm">
        <h3 className="pl-6 font-bold">Start a Post...</h3>
        <Icon
          icon="mdi:pencil"
          className="text-text-gray border-2 border-solid border-current h-10 w-10 p-2 mr-4 rounded-[50%]"
        />
      </div>
      <div className="w-full py-2 bg-light-blue rounded-3xl flex justify-between items-center shadow-sm">
        <h3 className="pl-6 font-bold">Upload a Video...</h3>
        <Icon
          icon="mdi:video"
          className="text-text-gray border-2 border-solid border-current h-10 w-10 p-2 mr-4 rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default PostMaker;
