import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import "./styles/Sidebar.css";
import { jwtDecode } from "jwt-decode";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const role =
    document.cookie.split("token=")[1] &&
    jwtDecode(document.cookie.split("token=")[1]).id.role;
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
      name: "Legal Resources",
      icon: <Icon className="w-8 h-8" icon="system-uicons:message-writing" />,
      path: "resources",
    },
    role
      ? {
          name: `${role ? role : ""} Dashboard`,
          icon: (
            <Icon
              className="w-8 h-8"
              icon="material-symbols-light:dashboard-outline"
            />
          ),
          path: `${role.toLowerCase()}Dashboard`,
        }
      : {},
  ];

  useEffect(() => {
    // Extract the path from the URL and find the corresponding index in sidebarItems
    let currentPath = location.pathname.slice(1);
    if (currentPath === "") currentPath = "/";
    if (currentPath === "pendingRequests" || currentPath === "updateContent")
      currentPath = "adminDashboard";
    const selectedIndex = sidebarItems.findIndex(
      (item) => item.path === currentPath
    );

    // Update the selected item only if a match is found
    if (selectedIndex !== -1) {
      setSelectedItem(selectedIndex);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div
      className={classNames(
        "text-text-gray h-screen  z-10 flex flex-col bg-white sticky top-0",
        {
          "w-auto px-2": !isSidebarOpen,
          "w-[20%]": isSidebarOpen,
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
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center mr-4 gap-1 font-saira">
              <h1>Nyaydoot</h1>
              {/* <Icon icon="octicon:law-24" className="ml-1 w-8 h-8" /> */}
              <img
                src="../../src/assets/logoblack.png"
                alt=""
                className="w-8 h-8 mr-10"
              />
            </div>
            <Icon icon="solar:arrow-left-linear" className="ml-2 w-8 h-8" />
          </div>
        ) : (
          // <Icon icon="octicon:law-24" className="mx-auto" />
          <img
            src="../../src/assets/logoblack.png"
            alt=""
            className="w-8 h-8"
          />
        )}
      </button>

      {/* Sidebar Open */}
      {isSidebarOpen ? (
        <nav className="mt-4 w-full mr-auto">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={classNames("mt-2 mx-2 p-2 rounded-2xl", {
                  "bg-light-blue text-primary": selectedItem === index,
                })}
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
        <nav className="mt-4 mx-auto">
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
