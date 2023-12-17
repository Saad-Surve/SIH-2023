import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Avatar from "react-avatar";
import Rows from "./rows";
import { Divider, Button, ScrollShadow } from "@nextui-org/react";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";
import "./userTable.css";

const UserTable = ({ user }) => {
  // console.log(user)
  const data = [
    {
      name: "Adv. Mrunmayee Deshmukh",
      case: "Breach Of Contract",
      status: "Accepted",
      color: "success",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      case: "Cyber Fraud",
      status: "pending",
      color: "danger",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      case: "License fraud",
      status: "pending",
      color: "danger",
    },
  ];

  const [requests, setRequests] = useState([]);

  const fetchHelp = async () => {
    // console.log(document.cookie)
    const token = document.cookie.split("token=")[1];
    // console.log(token)
    const username = jwtDecode(token).id.username;
    try {
      const response = await axios.get(
        `${ServerUrl}/api/client/getClientHelp`,
        {
          params: {
            username: username,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching Articles:", error);
    }
  };

  useEffect(() => {
    fetchHelp();
  }, []);

  return (
    <div className="w-[90%] h-[90%] bg-white rounded-3xl">
      <div className="p-6 text-2xl font-bold">Your Requests</div>
      <ScrollShadow
        size={10}
        className="flex flex-col px-5 h-[300px] random overflow-y-scroll"
      >
        <Divider />
        {/* {console.log(requests)} */}
        {requests.map((item, index) => (
          <div key={index}>
            <Rows
              description={item.descriptionByClient}
              category={item.category}
              lawyers={item.interestedLawyers}
              id={item._id}
            />

            <Divider />
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default UserTable;
