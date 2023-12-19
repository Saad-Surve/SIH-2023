import React, { useEffect, useState } from "react";
import Navbar from "../UI/Navbar";
import PendingRequests from "./PendingRequests";
import Posts from "./Posts";
import PostMaker from "./PostMaker";
import CustTable from "../UI/CustTable";
import { jwtDecode } from "jwt-decode";
import ServerUrl from "../../constants";
import axios from "axios";
import './pendingRequests.css'

const Dashboard = () => {
  //add custom user data here
  const [user, setUser] = useState({
    username: "",
    emailID: "",
  });

  const token = document.cookie.split("token=")[1].split(';')[0];
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
    <div className="w-full">
      <Navbar user={user} role={role} />
      <div className="lg:flex  w-full h-screen text-base text-text-black mt-2 lg:pl-6 random overflow-y-scroll">
        <div className="lg:w-4/6 lg:h-full">
          <PostMaker user={user} />
          <div className="w-full flex  lg:pr-4">
            <Posts user={user} />
          </div>
        </div>

        <div className="w-2/5 px-8 ">
          <PendingRequests user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
