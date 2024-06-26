import React, { useState } from "react";
import {
  Chip,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Avatar,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";
import MyAvatar from "./avatar";

const rows = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const color = () => {
    if (props.lawyers.length > 0) {
      return "success";
    } else return "danger";
  };
  const status = () => {
    if (props.lawyers.length > 0) {
      return "accepted";
    } else {
      return "pending";
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const token = document.cookie.split("token=")[1].split(";")[0];
    const username = jwtDecode(token).id.username;
    const helpId = props.id;
    // console.log(helpId)
    // console.log(username)
    try {
      // Replace 'YOUR_DELETE_ENDPOINT' with the actual endpoint for deleting a row
      const response = await axios.post(
        `${ServerUrl}/api/client/helpResolved`,
        { username, helpId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check the response status and update UI or handle accordingly
      if (response.status === 200) {
        console.log("Row deleted successfully!");
        // You might want to update the UI or refetch data here
      } else {
        console.error("Failed to delete row");
      }
    } catch (error) {
      console.error("Error deleting row:", error);
    }
    setIsLoading(false);
    location.reload();
  };

  // const fullName = props.name;
  // // Splitting the string into an array based on the space character
  // const nameParts = fullName.split(' ');
  // // Extracting the last two parts of the array (first part is 'Adv.')
  // const extractedName = nameParts.slice(1).join(' ');

  return (
    <div className="flex p-6 justify-between">
      <div className="w-1/4 flex gap-4 justify-start items-center">
        <div className="flex flex-col">
          <span className="text-lg font-bold">{props.category}</span>
          <span className="w-3/4 text-sm font-light">{props.description}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {/* {console.log(props.lawyers)} */}
        {props.lawyers.map((item, index) => (
          <>
            <Tooltip
              showArrow={true}
              size="sm"
              content={
                <div className="flex flex-col font-semibold">
                  <div>Name: {item.lawyer.name}</div>
                  <div>Email: {item.lawyer.emailID}</div>
                  <div>Experience: {item.lawyer.experience} yrs</div>
                  <div>Expertise: {item.lawyer.expertise}</div>
                  <div>Response: {item.responseByLawyer}</div>
                </div>
              }
              placement="bottom"
              classNames={{
                base: [
                  //arrow color
                  "before:bg-blue-950 :before:bg-white",
                ],
                content: [
                  "py-2 px-4 shadow-xl",
                  "text-white  bg-blue-950",
                ],
              }}
            >
              <MyAvatar />
            </Tooltip>
          </>
        ))}
      </div>
      <div className="flex gap-8 justify-center items-center">
        <Chip className="capitalize" color={color()} size="md" variant="flat">
          {status()}
        </Chip>
        <Button color="danger" variant="light" size="sm" onClick={onOpen}>
          <Icon icon="mi:delete" fontSize={20} />
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader> Delete Request </ModalHeader>
                  <ModalBody>
                    {" "}
                    Are you sure you want to delete the request{" "}
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      isLoading={isLoading}
                      onClick={handleDelete}
                      onPress={onClose}
                    >
                      {isLoading ? "Deleting" : "Delete"}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </Button>
      </div>
    </div>
  );
};

export default rows;
