import React from "react";
import Navbar from "../UI/navbar";
import { Icon } from "@iconify/react";
import LawyerCard from "./lawyerCard";

const Directory = () => {
  return (
    <div className="w-full flex flex-col h-auto">
      <Navbar />
      <div className="h-full flex flex-row ">
        <div className="max-w-7/12 flex flex-col p-10">
          <div className="flex flex-row p-10 m-1 border rounded-lg bg-blue-100 items-center font-extrabold text-base">
            <div className="flex flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon icon="tabler:phone" color="rgb(0,106,255)" fontSize={25} />
            </div>
            <span className="text-center">Talk in your Language</span>
            <div className="flex flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="mdi:encryption-check-outline"
                color="rgb(0,106,255)"
                fontSize={25}
              />
            </div>
            <span className="text-center">Secure and confidential</span>
            <div className="flex flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="fluent:notepad-person-20-regular"
                color="rgb(0,106,255)"
                fontSize={25}
              />
            </div>
            <span className="text-center">Consult Multiple Lawyers</span>
          </div>
          <div className="flex flex-col items-center p-5 gap-4 h-[800px] overflow-y-auto bg-red-500">
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
          </div>
        </div>
        <div className="w-5/12 flex bg-blue-300"></div>
      </div>
    </div>
  );
};

export default Directory;
