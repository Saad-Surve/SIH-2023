import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Divider,
  // Link,
  // Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import "./LawyerCard.css";

const LawyerCard = ({ lawyer }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full">
      <Card className="rounded-2xl w-full lg:min-w-[600px] shadow-sm p-8 z-5">
        <CardHeader className="flex gap-3 items-start flex-col text-3xl font-bold z-5">
          <span>{lawyer.name}</span>
          <span className="text-blue-500 text-base lg:text-2xl"> Practice Areas: {lawyer.expertise}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 lg:items-center">
            <div>
              <div className="flex flex-row p-1 items-center gap-1 text-sm">
                <Icon icon="system-uicons:location" />
                <span>{lawyer.location}</span>
              </div>
              <div className="flex flex-row  p-1 items-center gap-1 text-sm">
                <Icon icon="clarity:briefcase-line" />
                <span>{lawyer.experience} years</span>
              </div>
            </div>
            <Button color="primary" onClick={onOpen}>Connect Now</Button>
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
                      Lawyer Details
                    </ModalHeader>
                    <ModalBody className="random mr-2 text-justify">
                      <span>Email: {lawyer.emailID}</span>
                      <span>Phone Number: {lawyer.phoneNo}</span>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default LawyerCard;
