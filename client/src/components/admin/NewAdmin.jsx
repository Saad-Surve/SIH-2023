import React from "react";
import admin from "../../assets/admin.jpg";
import { Button, Input, Link } from "@nextui-org/react";

const NewAdmin = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div
        className="bg-cover bg-center w-full h-screen absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150"
        style={{ backgroundImage: `url(${admin})` }}
      ></div>
      <div className="bg-white/[0.81] w-3/5 h-3/5 flex flex-col gap-6 items-center justify-center  rounded-[40px] z-10 ">
        <div className="border-b-2 border-[#6E6E91] w-4/5 text-center pb-4 font-mulish">
          Make New Admin
        </div>
        <form className="w-3/5 gap-6 flex flex-col" autoComplete="off">
          <Input
            type="text"
            label="Username Of New Admin"
            name="username"
            placeholder="Enter a username"
            classNames={{
              input: ["p-0", "focus:ring-0", "border-none"],
            }}
          />
          <Input
            type="email"
            label="Email ID Of New Admin"
            name="emailID"
            placeholder="Enter a username"
            classNames={{
              input: ["p-0", "focus:ring-0", "border-none"],
            }}
          />
          <Input
            type="password"
            label="Password Of New Admin"
            name="password"
            placeholder="Enter your password"
            classNames={{
              input: ["p-0", "focus:ring-0", "border-none"],
            }}
          />
          <Button color="primary" size="large">
            Register
          </Button>
        </form>
        <div className="w-3/5 flex gap-10">
          <Link href="/pendingRequests" className="w-full">
            <Button className="w-full" color="secondary" size="large">
              Pending Requests
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

export default NewAdmin;
