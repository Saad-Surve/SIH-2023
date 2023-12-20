import React from "react";
import TypewriterComponent from "typewriter-effect";
import logo from "../../assets/logowhite.png";
import "./Arrow.css";

const Page1 = () => {
  return (
    <div className="lg:w-[60%] h-[calc(100vh-4rem)] z-10 flex flex-col items-center justify-around">
      <div className="h-[50%] lg:h-[35%] flex justify-center gap-3 items-center">
        <span className="text-3xl lg:text-6xl font-saira  text-white">
          Nyaydoot
        </span>
        <img src={logo} width={100} height={100} alt="" />
      </div>
      <div className="h-[50%] text-white w-full flex items-center gap-4 tracking-wider font-thin text-xl lg:text-5xl flex-col lg:h-[65%]">
        <div>DELIVERING JUSTICE</div>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("IN YOUR OWN LANGUAGE")
              .pauseFor(1000)
              .deleteAll()
              .typeString("AT YOUR CONVINIENCE")
              .deleteAll()
              .typeString("FOR ALL AND EVERYONE.")
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </div>
      <svg className="arrows z-10">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default Page1;
