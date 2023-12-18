import React, { useRef, useState } from "react";
import home2 from "../../assets/home_bg2.avif";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import OverviewModal from "./OverviewModal";

const Page2 = () => {
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOverview = () => {
    if (!open) {
      modalRef.current.style.display = "flex";
      // document.body.style.overflow='hidden'
      setOpen(true);
      return;
    } else {
      modalRef.current.style.display = "none";
      // document.body.style.overflow='auto'
      setOpen(false);
      return;
    }
  };
  return (
    <div className="relative font-mulish">
      <div className="bg-[#f1f1f4] p-6 text-base z-10 font-medium flex items-center justify-around ">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2">
            <Icon
              className="w-12 h-12 text-[#006AFF]"
              icon="clarity:language-solid"
            />
          </div>
          <span className="text-center">MultiLingual Support</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2">
            <Icon
              className="w-12 h-12 text-[#006AFF]"
              icon="carbon:condition-point"
            />
          </div>
          <span className="text-center">Scenario Wise Expert Help</span>
        </div>
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2">
            <Icon
              className="w-12 h-12 text-[#006AFF]"
              icon="fluent:people-community-48-filled"
            />
          </div>
          <span className="text-center">Connect with Multiple Lawyers</span>
        </div>
      </div>
      <div className="text-white flex flex-col gap-6 justify-center items-center h-[calc(100vh-64px-3rem)]">
        <div className="font-semibold">Still trying to find your way?</div>
        <motion.div
          onClick={handleOverview}
          className=" z-50 text-primary cursor-pointer"
          animate={{
            opacity: open ? 0 : 1,
            scaleY: open ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          Get an overview of the site
        </motion.div>
      </div>
      <OverviewModal
        modalRef={modalRef}
        handleOverview={handleOverview}
        open={open}
      />
    </div>
  );
};

export default Page2;
