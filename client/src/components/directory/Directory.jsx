import Navbar from "../UI/Navbar";
import { Icon } from "@iconify/react";
import LawyerCard from "./LawyerCard";
import Consult from "./Consult";
import { ScrollShadow } from "@nextui-org/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";

const Directory = () => {
  const [lawyers, setLawyers] = useState([]);
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

  const token = document.cookie.split("token=")[1];
  const username = jwtDecode(token).id.username;

  const role = jwtDecode(token).id.role;

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
      <div className="h-[calc(100vh-4rem-4px)] flex flex-row overflow-y-hidden">
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
            size={10}
            className="flex flex-col items-center px-5  gap-4 h-[600px] random overflow-y-scroll"
          >
            {lawyers.map((lawyer, index) => (
              <LawyerCard key={index} lawyer={lawyer} />
            ))}
          </ScrollShadow>
        </div>
        <div className="w-5/12 flex justify-center items-center">
          <Consult />
        </div>
      </div>
    </div>
  );
};

export default Directory;
