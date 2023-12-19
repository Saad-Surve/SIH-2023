import { Icon } from "@iconify/react";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import arrow from "../../assets/arrow.png";
import overview1 from "../../assets/overview1.png";

export default function OverviewModal({ modalRef, handleOverview, open }) {
  const data = [
    {
      content: "Learn about our site and visit us here!",
      image: "../../src/assets/overview1.png",
    },
    {
      content:
        "Access all your essential legal documents conveniently - your one-stop link hub.",
      image: "../../src/assets/overview2.jpg",
    },
    {
      content:
        "Stay informed with the latest legal developments - your go-to tab for breaking legal news and updates.",
      image: "../../src/assets/overview3.jpg",
    },
    {
      content:
        "Explore our comprehensive directory of registered lawyers right here in this tab - connecting you with the legal expertise you need.",
      image: "../../src/assets/overview4.png",
    },
    {
      content:
        "Dive into a wealth of legal insights and expertise with our lawyers' curated blogs and articles.",
      image: "../../src/assets/overview5.jpg",
    },
    {
      content:
        "Find helpful legal resources easily in this tab - your source for valuable information and guides",
      image: "../../src/assets/overview6.jpg",
    },
    {
      content:
        "Pose your specific questions to our chatbot - your reliable source for instant answers!",
      image: "../../src/assets/overview7.webp",
    },
  ];
  const arrowRef = useRef(null);
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    const w = modalRef.current.getBoundingClientRect().width;
    const h = modalRef.current.getBoundingClientRect().height;
    if (index === 0) {
      arrowRef.current.style.transition = "translate 1ms ease";
      arrowRef.current.style.translate = `${w * 0.8}px ${h * 0.99}px`;
      arrowRef.current.style.rotate = "180deg";
      setIndex(6);
      return;
    } else if (index === 6) {
      arrowRef.current.style.transition = "translate 1ms ease";
      arrowRef.current.style.translate = `0 17rem`;
      arrowRef.current.style.rotate = "0deg";
      setIndex(5);
      return;
    }
    arrowRef.current.style.transition = "translate 1ms ease";
    arrowRef.current.style.translate = `0 ${3.5 * (index - 1)}rem`;
    setIndex(index - 1);
  };
  const handleRight = () => {
    const w = modalRef.current.getBoundingClientRect().width;
    const h = modalRef.current.getBoundingClientRect().height;
    if (index === 5) {
      arrowRef.current.style.transition = "translate 1ms ease";
      arrowRef.current.style.translate = `${w * 0.8}px ${h * 0.99}px`;
      arrowRef.current.style.rotate = "180deg";
      setIndex(6);
      return;
    } else if (index === 6) {
      arrowRef.current.style.transition = "translate 1ms ease";
      arrowRef.current.style.translate = `0 0rem`;
      arrowRef.current.style.rotate = "0deg";
      setIndex(0);
      return;
    }
    arrowRef.current.style.transition = "translate 1ms ease";
    arrowRef.current.style.translate = `0 ${3.5 * (index + 1)}rem`;
    setIndex(index + 1);
  };
  return (
    <>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          scaleY: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full z-50 sticky  bottom-0 h-screen transition-all bg-slate-800 hidden flex-col"
      >
        <div className="w-full flex p-6 ">
          <Button isIconOnly color="danger" onPress={handleOverview}>
            <Icon icon="mdi:close" />
          </Button>
        </div>
        <div className="h-full w-full flex overflow-scroll ">
          <button
            onClick={handleLeft}
            className="h-full flex justify-center items-center w-[5%] text-white "
          >{`<`}</button>
          <div className="w-[90%] flex">
            <div className="w-2/5 flex items-center justify-center h-full">
              <Image src={data[index].image} className="w-full h-full" />
            </div>
            <div className="w-3/5 p-6 text-5xl h-full flex justify-center items-center text-white">
              {data[index].content}
            </div>
          </div>
          <button
            onClick={handleRight}
            className="h-full flex justify-center items-center w-[5%] text-white"
          >{`>`}</button>
        </div>
        <Image
          ref={arrowRef}
          src={arrow}
          className={`w-12 h-12 fixed top-0 translate-y-[5.5rem]`}
        />
      </motion.div>
    </>
  );
}
