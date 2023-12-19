import { useState } from "react";
import PostTable from "./PostTable";
import { Icon } from "@iconify/react";
import Pagination from "./Pagination";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";

  
const Posts = ({ user }) => {
  const allPosts = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentRows = allPosts?.slice(firstPostIndex, lastPostIndex)||[
    {
      headline: "No Posts",
      description: "No Posts",
      type: "No Posts",
      postedOn: '2017-05-21T00:00:00',
      id: "No Posts",
    },
  ];
  return (
    <div className="bg-white m-3 rounded-md w-full lg:ml-4  h-full ">
      <div className="flex justify-between items-center font-light p-4 pl-6">
        <h1 className="font-bold text-header-black">All Posts</h1>
      </div>
      <PostTable username={user.username} rows={currentRows} />
      <Pagination
        totalPosts={allPosts?.length||0}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Posts;

export async function loader() {
  const token = document.cookie.split("token=")[1].split(';')[0];
  const username = jwtDecode(token).id.username;
  console.log(token)
  const options = {
    method: "GET",
    url: `${ServerUrl}/api/lawyer/getLawyerPosts`,
    params: {
      lawyerUsername: username,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // let response;
  try {
    const response = await axios.request(options);
    // console.log(response.data)
    return response.data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error accordingly
  }
}
