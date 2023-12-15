import { useState, useEffect } from "react";
import Navbar from "../UI/Navbar";
import UserTable from "./UserTable";
import { jwtDecode } from "jwt-decode";
import ServerUrl from "../../constants";
import axios from "axios";

const UserDashboard = () => {
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
      if (role === "User") {
        url = `${ServerUrl}/api/user/getUser/?username=${username}`;
      }
      // else if (role === "Lawyer") {
      //   url = `${ServerUrl}/api/lawyer/getLawyer/?username=${username}`;
      // }

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
    <div className="w-screen">
      <div>
        <Navbar user={user} role={role} />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100vh-4rem-1px)] gap-4 ">
        <span>Hey {user.username} !!</span>
        <UserTable  user={user}/>
      </div>
    </div>
  );
};

export default UserDashboard;
