import React, { useState } from "react";
import registerUser from "../../assets/registerUser.jpg";
import { Input, useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CustModal from "../UI/Modal";
import axios from "axios";
import ServerUrl from "../../constants";

const LoginUser = ({ history }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  //  history = useHistory();
  const [contentModal, setContentModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!user.username || !user.password) {
      onOpen();
      setContentModal("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    let response = await axios
      .post(`${ServerUrl}/api/auth/loginUser`, user)
      .catch((err) => {
        console.log(err);
      });
    if (response.data.success) {
      //set the token of the response.data to a cookie
      document.cookie = `token=${response.data.token}; path=/; max-age=${
        60 * 60 * 24 * 30
      }`;
      onOpen();
      setIsLoading(false);
      window.location.href = "/userDashboard";
    } else {
      onOpen();
      setContentModal(response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <section className="w-full relative h-[calc(100vh-5rem)]">
      <div
        className="bg-cover bg-center w-full h-[calc(100vh-5rem)] absolute  opacity-10"
        style={{ backgroundImage: `url(${registerUser})` }}
      ></div>

      <div className="flex flex-col h-full justify-center items-center lg:pt-8 lg:flex-row lg:justify-center lg:items-center ">
        <div className="lg:w-[35%] gap-6  items-center justify-center h-full flex flex-col">
          <span>Login as a User </span>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className=" lg:w-[80%] flex flex-col justify-center items-center  bg-[#C0DAFF] gap-6 p-6 rounded-2xl"
          >
            <Input
              type="text"
              label="Username"
              name="username"
              onChange={handleChange}
              placeholder="Enter a username"
              classNames={{
                input: ["p-0", "focus:ring-0", "border-none"],
              }}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              classNames={{
                input: ["p-0", "focus:ring-0", "border-none"],
              }}
            />
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
              className="w-auto"
            >
              {isLoading ? "Logging" : "Login"}
            </Button>
            <span className="text-sm">
              Don't have an account?
              <Link className="text-sm" href="/registerUser">
                Register
              </Link>
            </span>
          </form>
        </div>
        <div className="w-full p-3 lg:w-[65%] flex flex-col gap-6 justify-center">
          <div className="text-base lg:text-xl hidden lg:flex flex-col gap-2 font-medium">
            <h1 className="lg:text-2xl hidden lg:flex">
              Get full access of our website by signing up as a user!
            </h1>
            <ul className=" list-disc list-inside font-light">
              <li>Consult a lawyer</li>
              <li>Talk with a lawyer near you</li>
              <li>Explore user benefits</li>
            </ul>
          </div>
          <div className="bg-[#A8A8BD] hidden flex-col lg:flex-row gap-6 lg:gap-0 w-[95%] p-6 text-base rounded-xl font-medium lg:flex items-center justify-around ">
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
          <div className="text-base lg:text-xl hidden lg:flex flex-col gap-2 font-medium">
            <h1 className="text-2xl">Want to contribute as a lawyer?</h1>
            <ul className="list-disc list-inside font-light">
              <li>Take up cases in your area</li>
              <li>Update people by posting articles</li>
              <li>Provide consultation in your expertise</li>
            </ul>
          </div>
          <div className="bg-[#C3DDFF] lg:w-3/4 rounded-xl flex items-center p-3 m-5">
            <Link
              className="font-semibold text-xl flex gap-3 w-full pl-6"
              href="/loginLawyer"
            >
              <span>Login as a Lawyer </span>
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

export default LoginUser;
