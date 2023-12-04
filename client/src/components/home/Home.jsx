import React from "react";
import home1 from '../../assets/home_bg.png'
import home2 from '../../assets/home_bg2.avif'
import { Button, Link } from "@nextui-org/react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Header from "./Header";

const Home = () => {
  return (
    <section className="w-full flex flex-col relative">
          <div className='bg-cover bg-center w-full h-screen absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150' style={{backgroundImage:`url(${home1})`}}></div>
          <Header/>
          <Page1 />
          <div className='bg-cover bg-center top-[100vh]  w-full h-screen absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150' style={{backgroundImage:`url(${home2})`}}></div>

          <Page2 />
    </section>
  )
};

export default Home;
