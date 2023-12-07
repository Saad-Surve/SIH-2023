import React from "react";
import Navbar from "../UI/navbar";
import UserTable from "./userTable";
const userDashboard = () => {
  return (
    <div className="w-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100vh-4rem-1px)] gap-4 ">
        <span>Hey Yusuf!!</span>
        <UserTable />
      </div>
    </div>
  );
};

export default userDashboard;
