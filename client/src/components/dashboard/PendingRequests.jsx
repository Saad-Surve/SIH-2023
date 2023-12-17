import classNames from "classnames";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  ScrollShadow,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import ServerUrl from "../../constants";
import { jwtDecode } from "jwt-decode";
import "./pendingRequests.css";

// const requests = [
//   {
//     name: "Shri Narayan",
//     type: "Breach of Contract",
//     icon: "images/nyaaydoot.png",
//   },
//   {
//     name: "Shri Narayan",
//     type: "Breach of Contract",
//     icon: "images/nyaaydoot.png",
//   },
//   {
//     name: "Shri Narayan",
//     type: "Breach of Contract",
//     icon: "images/nyaaydoot.png",
//   },
//   {
//     name: "Shri Narayan",
//     type: "Breach of Contract",
//     icon: "images/nyaaydoot.png",
//   },
//   {
//     name: "Shri Narayan",
//     type: "Breach of Contract",
//     icon: "images/nyaaydoot.png",
//   },
// ];

const PendingRequests = ({ user }) => {
  const [requests, setRequests] = useState([]);
  const [lawyerResponse, setLawyerResponse] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const token = document.cookie.split("token=")[1];
  const username = jwtDecode(token).id.username;
  const fetchHelp = async () => {
    try {
      const response = await axios.get(`${ServerUrl}/api/client/getAllHelp`, {
        params: {
          username: username,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Articles:", error);
    }
  };

  const acceptHelp = async (helpId) => {
    setIsLoading(true);
    try {
      const requestBody = {
        helpId: helpId,
        lawyerUserName: username,
        response: lawyerResponse,
      };
      const response = await axios.post(
        `${ServerUrl}/api/client/acceptHelp`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   setRequests((prevRequests) =>
      //   prevRequests.filter((request) => request._id !== helpId)
      // );
    } catch (error) {
      alert("An Error Occurred! Please Try Again Later");
      console.error("Error accepting request: ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHelp();
  }, []);

  return (
    <div className="h-[490px]  rounded-3xl bg-white m-12 mr-4 mt-4 ">
      {/* {console.log(requests)} */}
      <h1 className="border-b-2 border-b-grey-50 py-5 pl-8 font-bold text-xl mt-2">
        Pending Requests
      </h1>

      <ScrollShadow
        size={20}
        className="flex flex-col px-5 gap-4 h-[400px] random overflow-y-scroll"
      >
        {requests.map((request, index) => (
          <div
            key={index}
            className={classNames(
              "flex border-b-2 border-b-grey-50 items-center pl-6 justify-between ",
              {
                "bg-blue-50 bg-opacity-50": index % 2 == 1,
                // "rounded-b-3xl": index === requests.length - 1,
              }
            )}
          >
            <Avatar name={request.sentBy.username} size="40px" round />
            <div className="p-4 flex flex-col">
              <span className="font-medium text-sm">
                {request.sentBy.username}
              </span>
              <span className="text-sm">{request.category}</span>
            </div>
            <Button color="success" variant="light" size="md" onClick={onOpen}>
              <Icon icon="teenyicons:tick-circle-outline" fontSize={20} />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader> Accept Request </ModalHeader>
                    <ModalBody>
                      <Input
                        type="text"
                        className="w-full m-auto"
                        classNames={{
                          input: ["p-0", "focus:ring-0", "border-none"],
                        }}
                        label="Response"
                        placeholder="Enter Your Response"
                        name="lawyerResponse"
                        value={lawyerResponse} // Add this line to bind the input value to the state
                        onChange={(e) => setLawyerResponse(e.target.value)}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        isLoading={isLoading}
                        onPress={() => {
                          acceptHelp(request._id);
                          onClose();
                        }}
                      >
                        {isLoading ? "Submitting" : "Submit"}
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            {/* <Popover placement="left-start" showArrow={true}>
              <PopoverTrigger>
                <Icon
                  icon="pepicons-pencil:dots-y"
                  className="ml-auto mr-6 h-6 w-6 text-icon-gray hover:text-text-gray hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5 "
                />
              </PopoverTrigger>
              <PopoverContent>
                <Button
                  color="primary"
                  variant="light"
                  className=" px-4"
                  onClick={onOpen}
                >
                  <Icon icon="icon-park-solid:correct" />
                  Accept Request
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader> Accept Request </ModalHeader>
                          <ModalBody>
                            <Input
                              type="text"
                              className="w-full m-auto"
                              classNames={{
                                input: ["p-0", "focus:ring-0", "border-none"],
                              }}
                              label="Response"
                              placeholder="Enter Your Response"
                              name="lawyerResponse"
                              value={lawyerResponse} // Add this line to bind the input value to the state
                              onChange={(e) =>
                                setLawyerResponse(e.target.value)
                              } 
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="primary"
                              isLoading={isLoading}
                              onPress={() => {
                                acceptHelp(request._id);
                                onClose();
                              }}
                            >
                              {isLoading ? "Submitting" : "Submit"}
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </Button>
                <Button color="danger" variant="light" className="px-4">
                  <Icon icon="maki:cross" />
                  Reject Request
                </Button>
              </PopoverContent>
            </Popover> */}
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default PendingRequests;
