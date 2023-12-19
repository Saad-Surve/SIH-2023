import { useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import ServerUrl from "../../constants";

const AddVideo = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const username = user;

  // /api/lawyer
  // const [post, setPost] = useState({
  //   title: "",
  //   thumbnail: "",
  //   content: "",
  // });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    formData.append("lawyerUsername", username);
    // console.log(formData)
    try {
      const token = document.cookie.split("token=")[1].split(';')[0];

      const response = await axios.post(
        `${ServerUrl}/api/lawyer/createVideoPost`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "Video created") {
        alert("Video Post created");
      } else {
        alert("Video Post not created");
      }
    } catch (error) {
      console.error("Error Creating Article:", error);
    }
    setIsLoading(false);
    location.reload();
  };

  return (
    <div
      className="w-full py-2 bg-light-blue rounded-3xl flex justify-between items-center shadow-sm"
      onClick={onOpen}
    >
      <h3 className="pl-6 font-bold">Upload a Video...</h3>
      <Icon
        icon="mdi:video"
        className="text-text-gray border-2 border-solid border-current h-10 w-10 p-2 mr-4 rounded-[50%] hover:text-primary hover:cursor-pointer"
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col gap-4 z-10"
            >
              <ModalHeader className="flex flex-col gap-1">
                Add new Video
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  className="w-full m-auto"
                  classNames={{
                    input: ["p-0", "focus:ring-0", "border-none"],
                  }}
                  label="Title"
                  placeholder="Enter Video Title"
                  name="title"
                />
                <Input
                  type="file"
                  className="w-full m-auto"
                  classNames={{
                    input: ["p-0", "ml-16", "focus:ring-0", "border-none"],
                    inputWrapper: ["pt-9"],
                  }}
                  label="Video"
                  placeholder="Add Video"
                  name="video"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  type="outline"
                  variant="flat"
                  onPress={onClose}
                >
                  {"Cancel"}
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                  onPress={onClose}
                >
                  {isLoading ? "Posting Video" : "Post Video"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddVideo;
