import React, { useEffect, useState } from "react";
import Navbar from "../UI/Navbar";
import PendingRequests from "./PendingRequests";
import Posts from "./Posts";
import PostMaker from "./PostMaker";
import CustTable from "../UI/CustTable";
import { jwtDecode } from "jwt-decode";
import ServerUrl from "../../constants";
import axios from "axios";

const Dashboard = () => {
  //add custom user data here
  const [user, setUser] = useState({
    username: "",
    emailID: "",
  });

  const token = document.cookie.split("token=")[1];
  const username = jwtDecode(token).id.username;
  const role = jwtDecode(token).id.role;

  useEffect(() => {
    const getUser = async () => {
      let url;
      // if (role === "User") {
      //   url = `${ServerUrl}/api/user/getUser/?username=${username}`;
      // }
      // else
      if (role === "Lawyer") {
        url = `${ServerUrl}/api/lawyer/getLawyer/?username=${username}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({
        ...user,
        username: response.data.username,
        emailID: response.data.emailID,
      });
    };
    getUser();
  }, []);

  return (
    <div className="w-full ">
      <Navbar user={user} role={role} />
      <div className="flex w-full h-fit text-base text-text-black mt-2 pl-6">
        <div className="w-4/6 h-full">
          <PostMaker user={user} />
          <div className="w-full pr-4">
            <Posts user={user} />
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
