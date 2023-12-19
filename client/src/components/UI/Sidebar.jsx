import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import "./styles/Sidebar.css";
import { jwtDecode } from "jwt-decode";
import logo from "../../assets/logoblack.png";
import {
  Button,
  Link,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import GoogleTranslate from "./GoogleTranslate";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const token = document?.cookie?.split("token=")[1]?.split(";")[0];
  const location = useLocation();
  const role =
    token &&
    jwtDecode(document?.cookie?.split("token=")[1]?.split(";")[0]).id.role;
  const sidebarItems = [
    // {
    //   name: "Home",
    //   icon: <Icon className="w-8 h-8" icon="majesticons:home-line" />,
    //   path: "/",
    // },

    {
      name: "Legal News",
      icon: <Icon className="w-8 h-8" icon="fluent:news-28-regular" />,
      path: "/news",
    },
    {
      name: "Lawyer Contacts",
      icon: <Icon className="w-8 h-8" icon="clarity:directory-line" />,
      path: "/directory",
    },
    {
      name: "Lawyer Blogs",
      icon: <Icon className="w-8 h-8" icon="iconoir:community" />,
      path: "/community",
    },
    {
      name: "Legal Resources",
      icon: <Icon className="w-8 h-8" icon="system-uicons:message-writing" />,
      path: "/documents",
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  useEffect(() => {
    // Extract the path from the URL and find the corresponding index in sidebarItems
    let currentPath = `/${location.pathname.slice(1)}`;
    console.log(currentPath);
    if (currentPath === "") currentPath = "/";
    if (currentPath === "pendingRequests" || currentPath === "updateContent")
      currentPath = "adminDashboard";
    const selectedIndex = sidebarItems.findIndex(
      (item) => item.path === currentPath
    );
    console.log(selectedIndex);

    // Update the selected item only if a match is found
    if (selectedIndex !== -1) {
      setSelectedItem(selectedIndex);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (index) => {
    console.log("Item clicked:", index);
    setSelectedItem(index);
  };
  return (
    // <div
    //   className={classNames(
    //     "text-text-gray py-4 w-full gap-6 justify-between items-center flex-1 z-[99] flex bg-white sticky top-0",
    //   )}
    // >
    //   <Link
    //     className={classNames(
    //       "text-text-black w-[15%] focus:outline-none flex justify-center items-center logo text-xl",
    //     )}
    //     to="/"
    //     // onClick={toggleSidebar}
    //   >
    //     <img
    //       src={logo}
    //       width={50}
    //       height={50}
    //     />
    //     <h1>Nyaydoot</h1>

    //   </Link>
    //   {
    // !isMobile?
    //     <nav className="flex justify-end w-[85%]">
    //       <ul className="flex items-center pr-3 gap-2">
    //         {sidebarItems.map((item, index) => (
    //           <li
    //             key={index}
    //             className={classNames("rounded-2xl", {
    //               "bg-light-blue p-2  text-primary": selectedItem === index,
    //             })}
    //           >
    //             <Link to={item.path} onClick={() => handleItemClick(index)}>
    //               <div
    //                 className={classNames(
    //                   "flex text-lg text-center items-center text-icon-gray",
    //                   {
    //                     "text-primary": selectedItem === index,
    //                   }
    //                 )}
    //               >
    //                 <span
    //                   className={classNames("ml-2 text-primary", {
    //                     "text-text-gray": selectedItem != index,
    //                   })}
    //                 >
    //                   {item.name}
    //                 </span>
    //               </div>
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>:''

    //   }
    //   {/* Sidebar Open */}
    //   </div>
    <Navbar
      classNames={{
        wrapper: "max-w-full",
      }}
      className="w-full py-2  justify-between "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <img src={logo} width={50} height={50} />
            <p className="font-bold text-inherit">Nyaydoot</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="">
        {sidebarItems.map((item, index) => (
          <Link
            className={classNames("rounded-2xl", {
              "bg-light-blue p-2  text-primary": selectedItem === index,
            })}
            href={`${item.path}`}
            // size="lg"
            onClick={() => handleItemClick(index)}
            key={index}
          >
            <div
              className={classNames("flex text-center text-icon-gray", {
                "text-primary": selectedItem === index,
              })}
            >
              <span
                className={classNames("ml-2 text-primary", {
                  "text-text-gray": selectedItem != index,
                })}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </NavbarContent>
      <NavbarContent>
        <GoogleTranslate className="p-3" />
      </NavbarContent>
      {token ? (
        // If user is logged in, render nothing
        <></>
      ) : (
        // If user is not logged in, render Register and Login buttons
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              href="/registerUser"
              className="bg-white text-primary py-2 px-6 rounded-lg"
            >
              Register
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/loginUser"
              className="bg-primary text-white py-2 px-6 rounded-lg"
            >
              Login
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu className="mt-4 pt-4">
        {sidebarItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={classNames("rounded-2xl", {
                "  text-primary": selectedItem === index,
              })}
              href={`${item.path}`}
              // size="lg"
              onClick={() => handleItemClick(index)}
              key={index}
            >
              <div
                className={classNames("flex text-center text-icon-gray", {
                  "text-primary": selectedItem === index,
                })}
              >
                <span
                  className={classNames(
                    "ml-2 flex items-center gap-3 text-primary",
                    {
                      "text-text-gray": selectedItem != index,
                    }
                  )}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Sidebar;
