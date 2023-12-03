import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Divider,
  // Link,
  // Image,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import "./LawyerCard.css";

const LawyerCard = () => {
  return (
    <div className="">
      <Card className="min-w-[600px] shadow-sm p-8 z-5">
        <CardHeader className="flex gap-3 items-start flex-col text-3xl font-bold z-5">
          <span>Adv. Mayuri Deshpande</span>
          <span className="text-blue-500 text-2xl">Available</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex flex-row p-1 items-center gap-1 text-sm">
                <Icon icon="system-uicons:location" />
                <span>New delhi, Delhi</span>
              </div>
              <div className="flex flex-row  p-1 items-center gap-1 text-sm">
                <Icon icon="clarity:briefcase-line" />
                <span>5+ Years Exp</span>
              </div>
              <span className="flex justify-start font-bold text-sm">
                Practice Areas: Civil Matters
              </span>
            </div>
            <Button color="primary">Connect Now</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LawyerCard;
