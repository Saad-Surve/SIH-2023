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

const AddVideo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
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
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Post Video
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddVideo;
