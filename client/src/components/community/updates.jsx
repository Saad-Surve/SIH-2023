import { ScrollShadow } from "@nextui-org/react";
import logo from "../../assets/quick.jpg";
import movie from "../../assets/Sample.mp4";
import movie2 from "../../assets/mov.mp4";
import ServerUrl from "../../constants";
import axios from "axios";
import { useState, useEffect } from "react";
import video from '../../assets/a.mp4'

const Updates = () => {
  // const videoss = [
  //   {
  //     title: "Video Title 1",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"
  //   },
  //   {
  //     title: "Video Title 2",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"
  //   },
  //   {
  //     title: "Video Title 3",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 4",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 5",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 6",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 7",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 8",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 9",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  //   {
  //     title: "Video Title 10",
  //     thumbnail: "../../assets/contactbg.webp",
  //     path: "../../assets/a.mp4"

  //   },
  // ];

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${ServerUrl}/api/community/getVideos`);
      // console.log(response.data);
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching Videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="h-1/3 border-b-1 border-gray-500 flex items-center">
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="flex justify-start gap-6"
        size={5}
      >
        {/* {console.log(videos)} */}
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
                autoplay
              >
                {/* {console.log(video)}
                {index % 2 ? (
                  <source src={movie} type="video/mp4" />
                ) : (
                  <source src={movie2} type="video/mp4" />
                )} */}
                <source src={`${ServerUrl}/uploads/${video.path}`} type="video/mp4" />
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
