import React from "react";
import Navbar from "../UI/navbar";
import { Icon } from "@iconify/react";
import LawyerCard from "./lawyerCard";
import Consult from "./consult";
import {ScrollShadow} from "@nextui-org/react";

const Directory = () => {
  return (
    <div className="w-full flex flex-col h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <div className="h-[89%] flex flex-row">
        <div className="max-w-8/12 flex flex-col p-10 top-0 sticky ">
          <div className="flex flex-row p-10 m-1 border border-b-3 drop-shadow-sm  rounded-lg bg-blue-200 items-center w-[100%font-extrabold text-base z-10 ">
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
          <div className="p-5 gap-4 z-0 overflow-y-auto h-[70%] scrollbar-hide">
          <ScrollShadow >
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
          </ScrollShadow>
          </div>
        </div>
        <div className="w-5/12 flex justify-center items-center">
            <Consult />
        </div>
      </div>
    </div>
  );
};

export default Directory;
