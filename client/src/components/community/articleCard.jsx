import React from "react";
import { Image, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CustModal from "../UI/Modal.jsx";

const ArticleCard = ({ title, author, content, src, date }) => {
  return (
    <div className="flex p-4 gap-4 items-center border-b-2 mr-16">
      <div>
        <Image
          alt="Law"
          className="object-cover"
          width={180}
          height={190}
          shadow="sm"
          src={src}
        />
      </div>
      <div>
        <div className="flex gap-2 text-sm justify-start items-center">
          <div className="flex gap-1">
            <Icon icon="gg:profile" fontSize={20} />
            <span>{author}</span>
          </div>
          <span>&#x2022;</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <span className="text-2xl font-bold">{title}</span>
        <p className="text-sm">
          {content.length > 125
            ? content.substring(0, 125) + "..."
            : content.length}
        </p>
        <div className="flex gap-4 w-full justify-start items-center mt-4">
          <a href="#" className="text-sm text-gray-500 hover:text-red-500">
            Report
          </a>
          <span className="text-base">&#x2022;</span>
          <div className="w-max">
            <CustModal title={title} content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
