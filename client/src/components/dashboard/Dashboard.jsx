import React from "react";
import Navbar from "../UI/Navbar";
import PendingRequests from "./PendingRequests";
import Posts from "./Posts";
import PostMaker from "./PostMaker";

const Dashboard = () => {
  return (
    <div className="w-full"> 
      <Navbar />
      <div className="flex w-full text-base text-text-black mt-2">
        <div className="w-3/5 h-full ">
          <PostMaker />
          <Posts />
        </div>
        <PendingRequests />
      </div>
    </div>
  );
};

export default Dashboard;
