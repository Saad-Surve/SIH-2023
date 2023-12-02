import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiMail } from "react-icons/fi"; // Import icons from react-icons
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../../public/images/nyaaydoot.png";
import classNames from "classnames";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { name: "Home", icon: <FiHome />, path: "/" },
    { name: "About", icon: <FiUser />, path: "/about" },
    { name: "Contact", icon: <FiMail />, path: "/contact" },
  ];

  return (
    <div
      className={classNames(
        "bg-gray-800 text-white h-screen transition-all flex flex-col",
        {
          "w-16": !isSidebarOpen,
          "w-64": isSidebarOpen,
        }
      )}
    >
      <button
        // className="text-white p-4 focus:outline-none bg-red-500 flex ml-auto"
        className={classNames("text-white p-4 focus:outline-none bg-red-500", {
          "flex ml-auto": isSidebarOpen,
          "": !isSidebarOpen,
        })}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaArrowLeft /> : <img src={Logo} />}
      </button>

      <nav className="mt-4">
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={toggleSidebar}>
                {isSidebarOpen ? (
                  <div className="flex ">
                    {item.icon}{" "}
                    <span className="ml-2 bg-red-400">{item.name}</span>
                  </div>
                ) : (
                  item.icon
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
