import Navbar from "../UI/navbar";
import { Icon } from "@iconify/react";
import LawyerCard from "./LawyerCard.jsx";
import { ScrollShadow } from "@nextui-org/react";
import "./LawyerCard.css";

const Directory = () => {
  return (
    <div className="w-full z-10 flex flex-col">
      <Navbar />
      <div className="h-[calc(100vh-4rem-1px)] flex flex-row overflow-y-hidden">
        <div className="max-w-7/12 flex flex-col p-10">
          <div className="flex flex-row p-10 m-1 mb-4 border rounded-lg bg-blue-100 items-center font-extrabold text-base">
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
          <ScrollShadow
            size={15}
            className="flex flex-col items-center px-5  gap-4 h-[600px] random overflow-y-scroll"
          >
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
            <LawyerCard />
          </ScrollShadow>
        </div>
        <div className="w-5/12 flex bg-blue-300"></div>
      </div>
    </div>
  );
};

export default Directory;
