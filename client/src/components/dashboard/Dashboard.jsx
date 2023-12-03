import React from "react";
import Navbar from "../UI/Navbar";
import PendingRequests from "./PendingRequests";
import Posts from "./Posts";
import PostMaker from "./PostMaker";
import CustTable from "../UI/CustTable";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="flex w-full h-fit text-base text-text-black mt-2 pl-6">
        <div className="w-4/6 h-full">
          <PostMaker />
          <div className="w-full pr-4">
            <Posts />
          </div>
        </div>

        <div className="w-2/5 px-8 ">
          <PendingRequests />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
