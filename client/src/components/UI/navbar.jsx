import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";

const Navbar = (props) => {
  const role = props.role;

  const handleDataChange = (e) => {
    props.setSearchTerm(e.target.value);
  };

  const redirect = () => {
    window.location.href = `${props.role.toLowerCase()}Dashboard`;
    // window.location.href = `userDashboard`;
  };

  const user = props.user || {
    username: "",
    emailID: "",
  };

  const logout = () => {
    document.cookie = `token=; path=/; max-age=0`;
    window.location.href = "/";
  };
  return (
    <div className="bg-white top-0 sticky z-10 border-b-1 p-3 lg:px-6 flex flex-row lg:justify-center border-l shadow-md">
      <form className="w-full flex  gap-3" onSubmit={props.handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="lg:w-4/5 w-full h-10 p-4 bg-gray-100 text-text-gray rounded-xl border-inherit focus:outline-none text-base"
          onChange={handleDataChange}
        />
        <Button color="primary" className="rounded-full" type="submit">
          <Icon icon="eva:search-fill" />
        </Button>
      </form>
      <div className="w-full h-10 gap-2 flex flex-row text-icon-gray justify-end items-center">
        {user.username && (
          <>
            {role === "User" && location.pathname.slice(1) === "directory" && (
              <Popover placement="bottom-end" showArrow={true}>
                <PopoverTrigger>
                  <Icon
                    icon="ph:bell-bold"
                    className="w-6 h-6 mr-2 hover:text-text-gray"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  {/* <p className="py-2 w-36 text-center">
                    Your request has been approved!
                  </p> */}
                  <Button color="primary" className="m-2" onClick={redirect}>
                    Open Requests
                  </Button>
                </PopoverContent>
              </Popover>
            )}

            <Avatar name={user.username} size="35px" round />
            <div className="hidden lg:flex lg:flex-col lg:text-text-black">
              <span className="text-sm font-bold">{user.username}</span>
              <span className="text-xs text-text-gray">{user.emailID}</span>
            </div>
            <Popover placement="bottom-end" showArrow={true}>
              <PopoverTrigger>
                <Icon
                  icon="icon-park:down"
                  className="w-6 h-6 hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:-mx-1"
                />
              </PopoverTrigger>
              <PopoverContent>
                <Button
                  onPress={logout}
                  color="danger"
                  variant="light"
                  className="p-4"
                >
                  <Icon icon="material-symbols:logout" />
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </>
        )}
        {/* <Button onPress={t} color="danger" variant="light">
          T
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
