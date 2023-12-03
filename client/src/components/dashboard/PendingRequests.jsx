import classNames from "classnames";
import React from "react";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const requests = [
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
  {
    name: "Shri Narayan",
    type: "Breach of Contract",
    icon: "images/nyaaydoot.png",
  },
];

const PendingRequests = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="h-[500px]  rounded-3xl bg-white m-12 mr-4 mt-4">
      <h1 className="border-b-2 border-b-grey-50 py-5 pl-8 font-bold text-xl mt-2">
        Pending Requests
      </h1>
      {requests.map((request, index) => (
        <div
          key={index}
          className={classNames(
            "flex border-b-2 border-b-grey-50 items-center pl-6",
            {
              "bg-blue-50 bg-opacity-50": index % 2 == 1,
              // "rounded-b-3xl": index === requests.length - 1,
            }
          )}
        >
          <Avatar name={request.name} size="40px" round />
          <div className="p-4 flex flex-col">
            <span className="font-medium text-sm">{request.name}</span>
            <span className="text-sm">{request.type}</span>
          </div>
          <Icon
            icon="pepicons-pencil:dots-y"
            className="ml-auto mr-6 h-6 w-6 text-icon-gray hover:text-text-gray hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5 "
            onClick={onOpen}
          />
        </div>
      ))}
      <Modal
        backdrop="transparent"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-max"
        placement="bottom"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="px-4 mr-4">
                <Button
                  color="primary"
                  variant="light"
                  onPress={onClose}
                  className=" px-4"
                >
                  <Icon icon="icon-park-solid:correct" />
                  Accept Request
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="px-4"
                >
                  <Icon icon="maki:cross" />
                  Reject Request
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PendingRequests;
