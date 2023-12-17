import React from "react";
import { Image, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CustModal from "../UI/Modal.jsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Avatar from "react-avatar";

const ArticleCard = ({ title, author, content, src, date }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [datePostedOn, fullTime] = date.split("T");
  const [time, seconds] = fullTime.split(".");

  return (
    <div className="flex p-4 gap-4 items-center border-b-2 mr-16">
      <div className="min-w-[180px] min-h-[180px]">
        {/* {console.log(src)} */}
        <Image
          alt="Law"
          className="object-cover min-w-[180px] min-h-[180px]"
          width={180}
          height={190}
          shadow="sm"
          src={`http://localhost:5000/uploads${src}`}
        />
      </div>
      <div>
        <div className="flex gap-2 text-sm justify-start items-center">
          <div className="flex items-center gap-1">
            {/* Avatar */}
            <Avatar name={author} size="25px" round />
            <span>{author}</span>
          </div>
          <span>&#x2022;</span>

          <span className="text-gray-500">
            {datePostedOn}&nbsp;|&nbsp;{time}
          </span>
        </div>
        <span className="text-2xl font-bold">{title}</span>
        <p className="text-sm">
          {content.length > 125 ? content.substring(0, 125) + "..." : content}
        </p>
        <div className="flex gap-4 w-full justify-start items-center mt-2">
          <a href="#" className="text-sm text-gray-500 hover:text-red-500">
            Report
          </a>
          <span className="text-base">&#x2022;</span>
          <div className="w-max">
            <Button onPress={onOpen} color="primary">
              Read More
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              scrollBehavior="inside"
              className="max-h-[80%]"
              backdrop="blur"
            >
              <ModalContent className="flex flex-col items-center">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-2xl  items-center py-6">
                      {title}
                    </ModalHeader>

                    <ModalBody className="random mr-2 text-justify">
                      {content}
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="light"
                        onPress={onClose}
                        className="w-max"
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
