import Avatar from "react-avatar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import axios from 'axios';
import ServerUrl from '../../constants';


const navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleDataChange = (e) => {
    setSearchTerm(e.target.value)
  };
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${ServerUrl}/api/search/getLawyer`, {
        expertise: searchTerm,
      });
      props.setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const logout = () => {
    document.cookie = `token=; path=/; max-age=0`;
    window.location.href = "/";
  }
  return (
    <div className="bg-white top-0 sticky z-10 border-b-1 p-3 px-6 flex flex-row border-l shadow-md">
      <form className="w-full flex gap-3" onSubmit={handleSearch} >
        <input
          type="text"
          placeholder="Search"
          className="w-4/5 h-10 p-4 bg-gray-100 text-text-gray rounded-xl border-inherit focus:outline-none text-base"
          onChange={handleDataChange}
        />
        <Button color="primary" className="rounded-full" type="submit"><Icon icon="eva:search-fill" /></Button>
      </form>
      <div className="w-full h-10  gap-2 flex flex-row text-icon-gray justify-end items-center">
        {/* <Icon
          icon="material-symbols:settings-outline"
          className="w-6 h-6 hover:text-text-gray"
        /> */}
        <Popover placement="bottom-end" showArrow={true}>
          <PopoverTrigger>
            <Icon
              icon="ph:bell-bold"
              className="w-6 h-6 mr-2 hover:text-text-gray"
            />
          </PopoverTrigger>
          <PopoverContent>
            <p className="py-2 w-36 text-center">
              Your request has been approved!
            </p>
            <Button color="primary" className="mb-2">
              Open Requests
            </Button>
          </PopoverContent>
        </Popover>

        <Avatar name="Yusuf Sodawala" size="35px" round />
        <div className="flex flex-col text-text-black">
          <span className="text-sm font-bold">Yusuf Sodawala</span>
          <span className="text-xs text-text-gray">
            yusuf.sodawala@spit.ac.in
          </span>
        </div>
        <Popover placement="bottom-end" showArrow={true}>
          <PopoverTrigger>
            <Icon
              icon="icon-park:down"
              className="w-6 h-6 hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:-mx-1"
            />
          </PopoverTrigger>
          <PopoverContent>
            <Button onPress={logout} color="danger" variant="light" className="p-4">
              <Icon icon="material-symbols:logout" />
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default navbar;
