import classNames from "classnames";
import React from "react";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react";

const requests = [
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
];

const PendingRequests = () => {
  return (
    <div className="w-2/5 h-max rounded-3xl bg-white m-4">
      <h1 className="border-b-2 border-b-grey-50 py-5 pl-8 font-bold text-xl mt-2">
        Pending Requests
      </h1>
      {requests.map((request, index) => (
        <div
          key={index}
          className={classNames(
            "flex border-b-2 border-b-grey-50 items-center pl-6",
            {
              "bg-blue-50": index % 2 == 1,
              "rounded-b-3xl": index === requests.length - 1,
            }
          )}
        >
          <Avatar name={request.name} size="40px" round />
          <div className="p-4 flex flex-col">
            <span className="font-medium text-sm">{request.name}</span>
            <span className="text-sm">{request.type}</span>
          </div>
          <Icon icon="pepicons-pencil:dots-y" className="ml-auto mr-6 h-6 w-6 hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5 " />
        </div>
      ))}
    </div>
  );
};

export default PendingRequests;
