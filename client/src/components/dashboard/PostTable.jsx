import React from "react";
import { Icon } from "@iconify/react";
import Avatar from "react-avatar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const PostTable = ({ rows }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <table className="w-full ">
      <thead>
        <tr className="text-left text-icon-gray text-sm flex border-b-2 border-grey-200 pb-2">
          <th className="w-2/5 font-light pl-6">Post Details</th>
          <th className="w-1/5 font-light text-center">Type of Post</th>
          <th className="w-1/5 font-light  text-center">Date</th>
          <th className="font-light"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className="flex border-b-2 border-grey-200 py-4">
            <td className="w-2/5 font-medium  pl-6 flex items-center">
              <Avatar
                name="Yusuf Sodawala"
                size="35px"
                round
                className="mr-4"
              />
              <div className="flex flex-col">
                <span className="text-sm text-header-black">
                  {row.headline}
                </span>
                <span className="text-xs text-text-gray">
                  Updated 1 Day Ago
                </span>
              </div>
            </td>
            <td className="w-1/5 font-light  text-sm flex justify-center items-center text-header-black">
              {row.type}
            </td>
            <td className="w-1/5 font-light  text-sm flex justify-center items-center">
              <div className="flex flex-col">
                <span className="text-xs text-header-black">{row.Date}</span>
                <span className="text-xs text-icon-gray">6:30 PM</span>
              </div>
            </td>
            <td
              className="ml-auto font-light flex items-center"
              onClick={onOpen}
            >
              <Icon
                icon="pepicons-pencil:dots-y"
                className="mr-6 h-6 w-6 text-icon-gray hover:text-text-gray hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5"
              />
              {/* <PostModal onOpen={onOpen}/> */}
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Modal Title
                      </ModalHeader>
                      <ModalBody>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Magna exercitation reprehenderit magna aute tempor
                          cupidatat consequat elit dolor adipisicing. Mollit
                          dolor eiusmod sunt ex incididunt cillum quis. Velit
                          duis sit officia eiusmod Lorem aliqua enim laboris do
                          dolor eiusmod. Et mollit incididunt nisi consectetur
                          esse laborum eiusmod pariatur proident Lorem eiusmod
                          et. Culpa deserunt nostrud ad veniam.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
