import React from "react";
import registerUser from "../../assets/registerUser.jpg";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const LoginLawyer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full relative">
      <div
        className="bg-cover bg-center w-full h-full absolute  opacity-10"
        style={{ backgroundImage: `url(${registerUser})` }}
      ></div>

      <div className="flex h-full">
        <div className="w-[35%] gap-6 items-center justify-center h-full flex flex-col">
          <span>Login as a Lawyer </span>
          <form
            onSubmit={handleSubmit}
            className="w-[80%] flex flex-col justify-center items-center  bg-[#C0DAFF] gap-6 p-6 rounded-2xl"
          >
            <Input
              type="text"
              label="Username"
              placeholder="Enter a username"
              classNames={{
                input: ["p-0", "focus:ring-0", "border-none"],
              }}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              classNames={{
                input: ["p-0", "focus:ring-0", "border-none"],
              }}
            />
            <Button color="primary" type="submit" className="w-auto">
              Login
            </Button>
            <span className="text-sm">
              Don't have an account?{" "}
              <Link className="text-sm" href="/registerLawyer">
                Register
              </Link>
            </span>
          </form>
        </div>
        <div className="w-[65%] h-full flex flex-col gap-6  justify-center">
          <div className="text-xl flex flex-col gap-2 font-medium">
            <h1 className="text-2xl">Want to contribute as a lawyer?</h1>
            <ul className="list-disc list-inside font-light">
              <li>Take up cases in your area</li>
              <li>Update people by posting articles</li>
              <li>Provide consultation in your expertise</li>
            </ul>
          </div>
          <div className="bg-[#A8A8BD] w-[95%] p-6 text-base rounded-xl font-medium flex items-center justify-around ">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2">
                <Icon
                  className="w-12 h-12 text-[#006AFF]"
                  icon="clarity:language-solid"
                />
              </div>
              <span className="text-center">MultiLingual Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2">
                <Icon
                  className="w-12 h-12 text-[#006AFF]"
                  icon="carbon:condition-point"
                />
              </div>
              <span className="text-center">Scenario Wise Expert Help</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2">
                <Icon
                  className="w-12 h-12 text-[#006AFF]"
                  icon="fluent:people-community-48-filled"
                />
              </div>
              <span className="text-center">Connect with Multiple Lawyers</span>
            </div>
          </div>
          <div className="text-xl flex flex-col gap-2 font-medium">
            <h1 className="text-2xl">
              Get full access of our website as a user!
            </h1>
            <ul className="list-disc list-inside font-light">
              <li>Connect with a lawyer</li>
              <li>Talk with a lawyer near you</li>
              <li>Explore user benefits!</li>
            </ul>
          </div>
          <div className="bg-[#C3DDFF] w-3/4 rounded-xl flex items-center p-3">
            <Link
              className="font-semibold text-xl flex gap-3 w-full pl-6"
              href="/loginUser"
            >
              <span>Login as a User </span>
              <Icon
                className="w-12 h-12 text-[#006AFF]"
                icon="teenyicons:arrow-right-solid"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginLawyer;
