import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import React from "react";

const NewsCard = ({ headline, description, thumbnail, url, date }) => {
  return (
    <div className="flex p-8 gap-6 bg-light-blue rounded-3xl">
      <div>
        <img
          src={thumbnail}
          className="w-32 h-32 max-w-none  rounded-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around">
        <div className="text-2xl font-bold">{headline}</div>
        <div className="text-base w-4/5 ">{description}</div>
        <div className="text-sm font-semibold">
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
