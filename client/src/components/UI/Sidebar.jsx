import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    {
      name: "Home",
      icon: <Icon className="w-8 h-8" icon="majesticons:home-line" />,
      path: "/",
    },
    {
      name: "Legal Documents",
      icon: <Icon className="w-8 h-8" icon="carbon:document" />,
      path: "documents",
    },
    {
      name: "Legal News",
      icon: <Icon className="w-8 h-8" icon="fluent:news-28-regular" />,
      path: "news",
    },
    {
      name: "Legal Directory",
      icon: <Icon className="w-8 h-8" icon="clarity:directory-line" />,
      path: "directory",
    },
    {
      name: "Community Connect",
      icon: <Icon className="w-8 h-8" icon="iconoir:community" />,
      path: "community",
    },
  ];

  return (
    <div
      className={classNames(
        "text-text-gray h-screen transition-all duration-300 flex flex-col bg-white",
        {
          "w-16": !isSidebarOpen,
          "w-max": isSidebarOpen,
        }
      )}
    >
      <button
        className={classNames(
          "text-text-black p-4 pl-0 pr-0 w-100 focus:outline-none h-16 flex logo text-3xl border-b-2 ml-2 mr-2",
          {
            flex: isSidebarOpen,
            "": !isSidebarOpen,
          }
        )}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <div className="flex w-full justify-between items-center  ">
            <div className="flex items-center ">
              <h1>Nyaaydoot</h1>
              <Icon icon="octicon:law-24" className="ml-2 w-8 h-8" />
            </div>
            <Icon icon="solar:arrow-left-linear" className="ml-8 w-8 h-8" />
          </div>
        ) : (
          <Icon icon="octicon:law-24" className="mx-auto" />
        )}
      </button>

      {isSidebarOpen ? (
        <nav className="mt-4 w-full mr-auto">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="mt-2">
                <Link to={item.path}>
                  <div className="flex text-lg items-center text-icon-gray ml-4">
                    {item.icon}{" "}
                    <span className="ml-2 text-text-gray">{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="mt-4 mx-auto">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="mt-2 text-icon-gray ">
                <Link to={item.path}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
