import { Card, CardFooter, Image, Button } from "@nextui-org/react";
const DocumentCard = (props) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none z-5 items-center h-[220px]"
    >
      <Image
        removeWrapper
        src={props.image}
        alt="logo"
        // width={300}
        // height={300}
        className=" object-cover w-full h-full -z-0"
      />
      <CardFooter className="flex justify-between items-center before:bg-white border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small z-5 bg-black/25">
        <p className="text-base text-white font-bold">{props.title}</p>
        <a href={props.link} className="flex justify-center items-center">
          <Button
            className="text-xs text-white bg-primary/80"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Learn More
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
