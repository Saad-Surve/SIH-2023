import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Avatar from "react-avatar";
import Rows from "./rows";
import { Divider, Button } from "@nextui-org/react";

const UserTable = () => {

  
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
  return (
    <div className="w-[90%] h-[90%] bg-white rounded-3xl">
      <div className="p-6 text-2xl font-bold">Your Requests</div>
      <Divider />
      {data.map((item, index) => (
        <div key={index}>
          <Rows
            name={item.name}
            case={item.case}
            status={item.status}
            color={item.color}
          />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default UserTable;
