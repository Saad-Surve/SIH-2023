import { useState, useRef, useEffect } from "react";
import React from "react";
import { Button } from "@nextui-org/react";

// Data
import resources from "./data.js";

const Carousel = () => {
  const cardWidth = 300; // Adjust this value based on your card width
  const cardsVisible = 4;

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : resources.length - 1
    );
  };

  const moveNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < resources.length - 1 ? prevIndex + 1 : 0
    );
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }
    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = currentIndex * cardWidth;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = (resources.length + 1 - cardsVisible) * cardWidth;
  }, [resources, cardWidth, cardsVisible]);

  // Auto-advance the carousel every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  // Reset to the first card when reaching the last card
  useEffect(() => {
    if (currentIndex === resources.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, resources.length]);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-5xl  leading-8 font-semibold mb-12 text-[#05114f] text-center hover:text-white">
        Legal Quiz
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-black text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-100"
        >
          {resources.map((resource, index) => {
            return (
              <div
                className="border-black carousel-item w-[300px] h-[400px] text-center relative snap-start "
                key={index}
              >
                <div
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat hover:z-20 relative"
                  style={{
                    backgroundImage: `url(${resource.question || ""})`,
                    position: "relative",
                  }}
                >
                  <p
                    className="w-full h-full text-sm text-black relative hover:text-white"
                    
                  >
                    {resource.question || ""}
                  </p>
                </div>
                {/* hover */}
                <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-70 bg-sky-600 z-10">
                  <h3 className="py-6 px-3 flex flex-col mt-[8rem] items-center justify-center text-xl z-10">
                    {resource.choice.map((choice) => (
                      <div key={choice} className="flex flex-col">
                        {choice.correct ? (
                          <div>
                            <CustButton
                              key={choice.option}
                              color="success"
                              value={choice.option}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <CustButton
                              key={choice.option}
                              color="danger"
                              value={choice.option}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function CustButton({ value, color }) {
  return (
    <Button color={color} variant="ghost" className="text-white m-1">
      {value}
    </Button>
  );
}

export default Carousel;
