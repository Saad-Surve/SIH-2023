import {
  Button,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import admin from "../../assets/admin.jpg";
import React from "react";
import { Icon } from "@iconify/react";
import "./Admin.css";

const PendingRequests = () => {
  const data = [
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
    {
      name: "Adv. Mrunmayee Deshmukh",
      idProof: "default_thumbnail.jpg",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center relative h-screen">
      <div
        className="bg-cover bg-center w-full h-full absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150"
        style={{ backgroundImage: `url(${admin})` }}
      ></div>

      <div className="w-3/5 h-[90%] flex flex-col py-6 items-center justify-center  rounded-[40px] z-10 ">
        <div className="w-[90%] h-1/5 bg-white rounded-lg flex flex-col justify-center items-center">
          <div className="w-full text-center font-saira pt-4">
            Pending Lawyer Requests
          </div>
          <div className="w-3/5 flex items-center justify-between text-2xl font-bold">
            <div className="text-center text-black p-4">Name</div>
            <div className="">ID Proof</div>
          </div>
        </div>

        <ScrollShadow className="w-[90%] text-text-gray h-max mt-4 pr-2 admin  overflow-y-auto text-xl ">
          {/* <div className="flex flex-col justify-start bg-red-500"> */}
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full bg-light-blue rounded-md mb-2 pl-4"
              >
                <div
                  key={index}
                  className="w-full flex justify-between items-center text-lg  py-4 "
                >
                  <div className="">{`${index + 1}. ${item.name}`}</div>

                  <div className="flex items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-center w-full left-1/2 text-header-black  bg-white rounded-xl py-1.5 px-3 hover:bg-primary hover:text-white transition-all"
                      href={`http://localhost:5000/${item.idProof}`}
                    >
                      View Document
                    </a>
                    <div className="">
                      <Popover placement="left-start" showArrow={true}>
                        <PopoverTrigger>
                          <Icon
                            icon="pepicons-pencil:dots-y"
                            className="ml-6 mr-6 h-6 w-6 hover:text-primary hover:border-1 hover:bg-white hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mx-5  "
                          />
                        </PopoverTrigger>
                        <PopoverContent>
                          <Button
                            color="primary"
                            variant="light"
                            className=" px-4"
                          >
                            <Icon icon="icon-park-solid:correct" />
                            Accept Request
                          </Button>
                          <Button
                            color="danger"
                            variant="light"
                            className="px-4"
                          >
                            <Icon icon="maki:cross" />
                            Reject Request
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </ScrollShadow>
        <div className="w-3/5 h-1/5 flex gap-10">
          <Link href="/newAdmin" className="w-full">
            <Button className="w-full" color="secondary" size="large">
              Make New Admin
            </Button>
          </Link>
          <Link href="/updateContent" className="w-full">
            <Button className="w-full" color="secondary" size="large">
              Update Content
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;
