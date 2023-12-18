import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import React from "react";

const NewsCard = ({ headline, description, thumbnail, url, date }) => {
  return (
    <div className="flex flex-col lg:flex-row p-8 gap-6 bg-light-blue rounded-3xl">
      <div className="flex justify-center items-center gap-6 ">
        <img
          src={thumbnail}
          className="lg:w-32 lg:h-32 w-24 h-24 max-w-none  rounded-lg"
          alt=""
        />
        <div className="text-sm font-semibold flex lg:hidden ">
          {new Date(date).toLocaleString("en-IN")}
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-0 justify-around">
        <div className="text-base lg:text-2xl font-bold">{headline}</div>
        <div className="text-sm hidden lg:flex  lg:text-base w-4/5 ">{description}</div>
        <div className="text-sm hidden lg:flex font-semibold">
          {new Date(date).toLocaleString("en-IN")}
        </div>
        <div className="text-sm">
          <Link target="_blank" href={url} className="flex items-center">
            Read more
            <Icon icon="mdi:arrow-top-right-bold-box-outline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
