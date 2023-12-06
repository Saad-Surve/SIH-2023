import { ScrollShadow } from "@nextui-org/react";
import logo from "../../assets/quick.jpg";
import movie from "../../assets/Sample.mp4";
import movie2 from "../../assets/mov.mp4";

const Updates = () => {
  const videos = [
    {
      title: "Video Title 1",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 2",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 3",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 4",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 5",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 6",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 7",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 8",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 9",
      thumbnail: "../../assets/contactbg.webp",
    },
    {
      title: "Video Title 10",
      thumbnail: "../../assets/contactbg.webp",
    },
  ];

  return (
    <div className="h-1/3 border-b-1 border-gray-500 flex items-center">
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="flex justify-start gap-6"
        size={5}
      >
        {videos.map((video, index) => (
          <div
            className="flex flex-col justify-center items-center ml-4 gap-2"
            key={index}
          >
            <div className="w-[250px] h-[187.5px] bg-green-500 overflow-hidden rounded-lg">
              <video
                controls
                muted
                className="object-cover h-full w-full rounded-lg"
                poster={logo}
              >
                {index % 2 ? (
                  <source src={movie} type="video/mp4" />
                ) : (
                  <source src={movie2} type="video/mp4" />
                )}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Updates;
