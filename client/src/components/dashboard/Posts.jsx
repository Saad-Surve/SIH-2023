import React from "react";
import PostTable from "./PostTable";
import { Icon } from "@iconify/react";

const rows = [
  {
    key: "1",
    headline: "News 1",
    type: "Article",
    Date: "2023-11-10",
  },
  {
    key: "2",
    headline: "News 2",
    type: "Video",
    Date: "2023-11-19",
  },
  {
    key: "3",
    headline: "News 3",
    type: "Article",
    Date: "2023-11-20",
  },
  {
    key: "4",
    headline: "News 4",
    type: "Article",
    Date: "2023-11-18",
  },
];

const Posts = () => {
  return (
    <div className="bg-white rounded-md w-full ml-4 h-full ">
      <div className="flex justify-between items-center font-light p-4 pl-6">
        <h1 className="font-bold text-header-black">All Posts</h1>
        <div className="flex gap-4">
          <button className="text-sm flex items-center text-text-gray">
            <Icon icon="bi:sort-up" className="mr-1 text-icon-gray " />
            Sort
          </button>
          <button className="text-sm flex items-center text-text-gray ">
            <Icon icon="mdi:filter" className="mr-1 text-icon-gray" />
            Filter
          </button>
        </div>
      </div>
      <PostTable rows={rows} />
      <div className="text-center py-5">Placeholder for Pagination</div>
    </div>
  );
};

export default Posts;
