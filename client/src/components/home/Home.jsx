import React from "react";
import home from '../../assets/home_bg.png'
import { Button, Link } from "@nextui-org/react";
import FrontPage from "./FrontPage";

const Home = () => {
  return (
    <section className="w-full flex flex-col relative">
        <div className='bg-cover bg-center w-full h-full absolute opacity-90 bg-gradient-to-t	brightness-[25%] saturate-150' style={{backgroundImage:`url(${home})`}}></div>
        <div className="flex w-full p-5 font-bold text-2xl justify-end gap-6">
          <Link href="/registerUser" className="bg-primary text-white py-1 px-12 rounded-lg">
            Register
          </Link>
          <Link href="/loginUser" className="bg-white text-primary py-1 px-12 rounded-lg">
            Login
          </Link>
        </div>
        <FrontPage />
    </section>
  )
};

export default Home;
