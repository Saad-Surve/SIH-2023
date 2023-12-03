import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
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
    {
      name: "Lawyer Dashboard",
      icon: (
        <Icon
          className="w-8 h-8"
          icon="material-symbols-light:dashboard-outline"
        />
      ),
      path: "dashboard",
    },
  ];

  return (
    <div
      className={classNames(
        "text-text-gray h-screen  z-10 flex flex-col bg-white sticky top-0 transition-all ease-in-out duration-300",
        {
          "w-auto px-2": !isSidebarOpen,
          "w-max": isSidebarOpen,
        }
      )}
    >
      <button
        className={classNames(
          "text-text-black p-4 pl-0 pr-0 w-100 focus:outline-none h-16 flex logo text-3xl border-b-2 ml-2 mr-2 transition-all ease-in-out duration-300",
          {
            "flex": isSidebarOpen,
            "": !isSidebarOpen,
          }
        )}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <div className="flex w-full justify-between items-center">
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

      {/* Sidebar Open */}
      {isSidebarOpen ? (
        <nav className="mt-4 w-full mr-auto transition-all ease-in-out duration-300">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={classNames(
                  "mt-2 mx-2 p-2 rounded-2xl transition-all ease-in-out duration-300",
                  {
                    "bg-light-blue text-primary": selectedItem === index,
                  }
                )}
              >
                <Link to={item.path} onClick={() => handleItemClick(index)}>
                  {/* <div className="flex text-lg items-center text-icon-gray ml-4"> */}
                  <div
                    className={classNames(
                      "flex text-lg items-center text-icon-gray",
                      {
                        "text-primary": selectedItem === index,
                      }
                    )}
                  >
                    {item.icon}{" "}
                    <span
                      className={classNames("ml-2 text-primary", {
                        "text-text-gray": selectedItem != index,
                      })}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        //  Sidebar is Closed
        <nav className="mt-4 mx-auto transition-all ease-in-out duration-300">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={classNames("mt-2 text-icon-gray p-2 rounded-2xl ", {
                  "bg-light-blue text-primary": selectedItem === index,
                })}
              >
                <Link to={item.path} onClick={() => handleItemClick(index)}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
