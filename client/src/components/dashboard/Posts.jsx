import { useState } from "react";
import PostTable from "./PostTable";
import { Icon } from "@iconify/react";
import Pagination from "./Pagination";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";

const rows = [
  {
    key: "1",
    headline: "News 1",
    type: "Article",
    Date: "2023-11-10",
  },
  {
    key: "2",
    headline: "News 2",
    type: "Video",
    Date: "2023-11-19",
  },
  {
    key: "3",
    headline: "News 3",
    type: "Article",
    Date: "2023-11-20",
  },
  {
    key: "4",
    headline: "News 4",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "5",
    headline: "News 5",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "6",
    headline: "News 6",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "7",
    headline: "News 7",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "8",
    headline: "News 8",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "9",
    headline: "News 9",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "10",
    headline: "News 10",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "1",
    headline: "News 1",
    type: "Article",
    Date: "2023-11-10",
  },
  {
    key: "2",
    headline: "News 2",
    type: "Video",
    Date: "2023-11-19",
  },
  {
    key: "3",
    headline: "News 3",
    type: "Article",
    Date: "2023-11-20",
  },
  {
    key: "4",
    headline: "News 4",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "5",
    headline: "News 5",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "6",
    headline: "News 6",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "7",
    headline: "News 7",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "8",
    headline: "News 8",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "9",
    headline: "News 9",
    type: "Article",
    Date: "2023-11-18",
  },
  {
    key: "10",
    headline: "News 10",
    type: "Article",
    Date: "2023-11-18",
  },
];

const Posts = ({ user }) => {
  const allPosts = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentRows = allPosts.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="bg-white rounded-md w-full ml-4 h-full ">
      <div className="flex justify-between items-center font-light p-4 pl-6">
        <h1 className="font-bold text-header-black">All Posts</h1>
      </div>
      <PostTable username={user.username} rows={currentRows} />
      <Pagination
        totalPosts={allPosts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Posts;

export async function loader() {
  const token = document.cookie.split("token=")[1];
  const username = jwtDecode(token).id.username;

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
    return response.data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error accordingly
  }
}
