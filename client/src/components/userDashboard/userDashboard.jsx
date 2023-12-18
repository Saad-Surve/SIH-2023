// import React from "react";
// import Navbar from "../UI/navbar";
// import UserTable from "./userTable";
// const userDashboard = () => {
//   return (
//     <div className="w-screen">
//       <div>
//         <Navbar />
//       </div>
//       <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100vh-4rem-1px)] gap-4 ">
//         <span>Hey Yusuf!!</span>
//         <UserTable />
//       </div>
//     </div>
//   );
// };

// export default userDashboard;

// UserDashboard.jsx
import React from "react";
import Navbar from "../UI/Navbar";
import UserTable from "./UserTable";

const UserDashboard = (props) => {
  // Extract the username from the route state
  const username = props?.location?.state?.user?.username;

  // Render loading state if username is not available yet
  if (!username) {
    return (
      <div className="w-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100vh-4rem-1px)] gap-4 ">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  // Render user information once available
  return (
    <div className="w-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100vh-4rem-1px)] gap-4 ">
        <span>{`Hey ${username}!!`}</span>
        <UserTable />
      </div>
    </div>
  );
};

export default UserDashboard;
