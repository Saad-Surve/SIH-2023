import Navbar from "../UI/Navbar";
import { Icon } from "@iconify/react";
import LawyerCard from "./LawyerCard";
import Consult from "./Consult";
import { ScrollShadow } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";

const Directory = () => {
  const [lawyers, setLawyers] = useState([
    {
    name:'saad',
    expertise:'cyber',
    experience:'5',
    location:'mumbai',
    emailID:'saad.surve@spit.ac.in',
    phoneNo:'8355989770'
  },
    {
    name:'saad',
    expertise:'cyber',
    experience:'5',
    location:'mumbai',
    emailID:'saad.surve@spit.ac.in',
    phoneNo:'8355989770'
  },
    {
    name:'saad',
    expertise:'cyber',
    experience:'5',
    location:'mumbai',
    emailID:'saad.surve@spit.ac.in',
    phoneNo:'8355989770'
  },

]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLawyers = async () => {
    try {
      const response = await axios.get(`${ServerUrl}/api/lawyer/getLawyers`);
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };
  useEffect(() => {
    // Fetch lawyers when the component mounts
    fetchLawyers();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${ServerUrl}/api/search/getLawyers`, {
        expertise: searchTerm,
        name: searchTerm,
        experience: searchTerm,
        location: searchTerm,
      });
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //add custom user data here
  const [user, setUser] = useState({
    username: "",
    emailID: "",
  });

  const token = document.cookie.split("token=")[1].split(';')[0];
  // console.log(token);

  let username = "",
    role = "";

  if (token) {
    username = jwtDecode(token).id.username;
    role = jwtDecode(token).id.role;
  }

  // const role = jwtDecode(token).id.role;
  // console.log(role);

  useEffect(() => {
    const getUser = async () => {
      let url;
      if (role === "User") {
        url = `${ServerUrl}/api/user/getUser/?username=${username}`;
      }
      // else if (role === "Lawyer") {
      //   url = `${ServerUrl}/api/lawyer/getLawyer/?username=${username}`;
      // }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({
        ...user,
        username: response.data.username,
        emailID: response.data.emailID,
      });
    };
    getUser();
  }, []);

  return (
    <div className="w-full z-10 flex flex-col">
      <Navbar
        setLawyers={setLawyers}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        user={user}
        role={role}
      />
      <div className="lg:h-[calc(100vh-5rem)] pt-8 flex lg:flex-row flex-col-reverse overflow-y-hidden">
        <div className="w-full lg:max-w-7/12 flex flex-col p-10">
          <div className="lg:flex hidden lg:flex-row gap-6 flex-col p-6 lg:p-10 lg:m-1 mb-4 border rounded-lg bg-blue-100 items-center font-extrabold text-base">
            <div className="flex lg:hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon icon="tabler:phone" color="rgb(0,106,255)" fontSize={25} />
              <span className=" text-center">Talk in your Language</span>
            </div>
            {/* for pc only */}
            <div className="lg:flex hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon icon="tabler:phone" color="rgb(0,106,255)" fontSize={25} />
            </div>
              <span className="lg:flex hidden text-center">Talk in your Language</span>
              {/* for mobile only */}
            <div className="flex lg:hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="mdi:encryption-check-outline"
                color="rgb(0,106,255)"
                fontSize={25}
              />
              <span className="text-center">Secure and confidential</span>
            </div>
            {/* for pc only */}
            <div className="lg:flex hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="mdi:encryption-check-outline"
                color="rgb(0,106,255)"
                fontSize={25}
              />
            </div>
              <span className="lg:flex hidden text-center">Secure and confidential</span>
              {/* for mobile only */}
            <div className="flex lg:hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="fluent:notepad-person-20-regular"
                color="rgb(0,106,255)"
                fontSize={25}
              />
              <span className="text-center">Consult Multiple Lawyers</span>
            </div>
            <div className="lg:flex hidden flex-row justify-center items-center border rounded-full p-2 border-white bg-white">
              <Icon
                icon="fluent:notepad-person-20-regular"
                color="rgb(0,106,255)"
                fontSize={25}
              />
            </div>
              <span className="lg:flex hidden text-center">Consult Multiple Lawyers</span>
          </div>
          <ScrollShadow
            size={10}
            className="flex flex-col items-center lg:px-5  gap-4 h-[600px] random overflow-y-scroll"
          >
            {lawyers.map((lawyer, index) => (
              <LawyerCard key={index} lawyer={lawyer} />
            ))}
          </ScrollShadow>
        </div>
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <Consult user={user} role={role} />
        </div>
      </div>
    </div>
  );
};

export default Directory;
