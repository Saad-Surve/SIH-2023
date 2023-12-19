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

const AddPost = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const username = user.username;

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    thumbnail: "",
    content: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!(post.content && post.title)) {
      // alert("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    Object.entries(post).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // console.log(formData);
    formData.append("lawyerUsername", username);
    // console.log(formData);
    formData.append("thumbnail", selectedFile);
    // console.log(formData);

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

      if (response.data.message === "Article created") {
        alert("Article created");
      } else {
        alert("Article not created");
      }
    } catch (error) {
      console.error("Error Creating Article:", error);
    }
    setIsLoading(false);
    location.reload();
  };

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
    // console.log(post);
    // console.log(selectedFile);
  };

  return (
    <div
      className="w-full py-2 bg-light-blue rounded-3xl flex justify-between items-center shadow-sm "
      onClick={onOpen}
    >
      <h3 className="pl-6 font-bold ">Start a Post...</h3>
      <Icon
        icon="mdi:pencil"
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
