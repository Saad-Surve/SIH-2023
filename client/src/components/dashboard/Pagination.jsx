// import "./.css";
import { Button } from "@nextui-org/react";
import classNames from "classNames";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-4 mt-2 pb-2">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={classNames("p-2 px-4  text-primary rounded-lg", {
              "bg-light-blue": index === currentPage - 1,
            })}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
