import React from "react";
import TypewriterComponent from "typewriter-effect";
import logo from "../../assets/logo2.png";

const Page1 = () => {
  return (
    <div className="w-[55%] h-[calc(100vh-4.5rem)] z-10 flex flex-col items-center justify-around">
      <div className="h-[35%] flex justify-center gap-3 items-center">
        <span className="text-6xl font-saira  text-white">Nyaydoot</span>
        <img src={logo} width={100} height={100} alt="" />
      </div>
      <div className="text-white w-full flex items-center lg:gap-4 tracking-wider font-thin text-4xl flex-col h-[65%]">
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
    </div>
  );
};

export default Page1;
