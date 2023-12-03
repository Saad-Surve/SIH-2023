import { Card, CardFooter, Image, Button } from "@nextui-org/react";
const DocumentCard = (props) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt=""
        className="object-cover"
        height={200}
        src={props.image}
        width={200}
      />
      <CardFooter className="flex justify-between items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black font-bold">{props.title}</p>
        <a href={props.link}>
          <Button
            className="text-tiny text-white bg-primary/70"
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
