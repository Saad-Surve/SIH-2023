import { useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
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

const AddPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const username = "1212";

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

    try {
      const token = document.cookie.split("token=")[1];

      const response = await axios.post(
        `${ServerUrl}/api/lawyer/createArticle`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      if (response.data.message === "Article created") {
        alert("Article created");
      } else {
        alert("Article not created");
      }
    } catch (error) {
      console.error("Error Creating Article:", error);
    }
    setIsLoading(false);
  };

  return (
    <div
      className="w-full py-2 bg-light-blue rounded-3xl flex justify-between items-center shadow-sm"
      onClick={onOpen}
    >
      <h3 className="pl-6 font-bold">Start a Post...</h3>
      <Icon
        icon="mdi:pencil"
        className="text-text-gray border-2 border-solid border-current h-10 w-10 p-2 mr-4 rounded-[50%] hover:text-primary hover:cursor-pointer"
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col gap-4 z-10"
            >
              <ModalHeader className="flex flex-col gap-1">
                Add new Article
              </ModalHeader>

              <ModalBody>
                <Input
                  type="text"
                  className="w-full m-auto"
                  classNames={{
                    input: ["p-0", "focus:ring-0", "border-none"],
                  }}
                  label="Headline"
                  placeholder="Enter the Headline"
                  name="title"
                />
                <Input
                  type="file"
                  className="w-full m-auto"
                  classNames={{
                    input: ["p-0", "ml-16", "focus:ring-0", "border-none"],
                    inputWrapper: ["pt-9"],
                  }}
                  label="Thumbnail"
                  placeholder="Add thumbnail"
                  name="thumbnail"
                />
                <Textarea
                  type="text"
                  className="w-full m-auto"
                  classNames={{
                    input: ["p-0", "focus:ring-0", "border-none"],
                  }}
                  label="Content"
                  placeholder="Add Article Content"
                  name="content"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                  onPress={onClose}
                >
                  {isLoading ? "Posting" : "Post"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddPost;
