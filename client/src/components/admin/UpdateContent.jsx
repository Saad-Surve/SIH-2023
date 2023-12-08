import {
  Button,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react";
import admin from "../../assets/admin.jpg";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Admin.css";
import CustModal from "../UI/Modal";

const UpdateContent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const data = [
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
    {
      orginalContent: "Adv. Mrunmayee Deshmukh",
      changes: "default_thumbnail.jpg",
    },
  ];
  return (
    <div className="w-full  flex justify-center items-center relative h-screen">
      <div
        className="bg-cover bg-center w-full h-full absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150"
        style={{ backgroundImage: `url(${admin})` }}
      ></div>
      <div className="w-3/5 h-[90%] flex flex-col py-6 items-center justify-center  rounded-[40px] z-10 ">
        <div className="w-[90%] h-1/5 bg-white rounded-lg flex flex-col justify-center items-center">
          <div className="w-full text-center font-saira pt-4">
            Pending Update Requests
          </div>
          <div className="w-[90%] flex items-center justify-between text-xl font-bold">
            <div className="text-black p-4 ml-6">Original Content</div>
            <div className="mr-28">Proposed Changes</div>
          </div>
        </div>
        <ScrollShadow className="w-[90%] text-text-gray h-max mt-4 pr-2 admin overflow-y-auto text-xl">
          {/* <span className="border-b-2 border-[#6E6E91] p-4"></span> */}
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full justify-center items-center bg-light-blue rounded-md mb-2 pl-4"
              >
                <div className="w-full flex justify-evenly items-center text-lg  py-4 ">
                  <div className="">
                    <Button
                      onClick={() => {
                        setTitle("Original Content");
                        setContent(item.orginalContent);
                        onOpen();
                      }}
                      className="text-lg text-center text-header-black bg-white rounded-xl py-1.5 px-3 hover:bg-primary hover:text-white transition-all"
                    >
                      View Original Content
                    </Button>
                  </div>
                  <div className="">
                    <Button
                      onClick={() => {
                        setTitle("Proposed Changes");
                        setContent(item.changes);
                        onOpen();
                      }}
                      className="text-lg text-center text-header-black bg-white rounded-xl py-1.5 px-3  hover:bg-primary hover:text-white transition-all"
                    >
                      View Proposed Changes
                    </Button>
                  </div>
                </div>
                <div className="">
                  <Popover placement="left-start" showArrow={true}>
                    <PopoverTrigger>
                      <Icon
                        icon="pepicons-pencil:dots-y"
                        className="ml-6 mr-6 h-6 w-6 hover:text-primary hover:border-1 hover:bg-white hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mx-5 "
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <Button color="primary" variant="light" className=" px-4">
                        <Icon icon="icon-park-solid:correct" />
                        Accept Request
                      </Button>
                      <Button color="danger" variant="light" className="px-4">
                        <Icon icon="maki:cross" />
                        Reject Request
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })}
          <CustModal
            title={title}
            content={content}
            onOpen={onOpen}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          />
        </ScrollShadow>

        <div className="w-3/5 h-1/5 flex gap-10">
          <Link href="/pendingRequests" className="w-full">
            <Button className="w-full" color="secondary" size="large">
              Pending Lawyer Requests
            </Button>
          </Link>
          <Link href="/newAdmin" className="w-full">
            <Button className="w-full" color="secondary" size="large">
              Make New Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateContent;
