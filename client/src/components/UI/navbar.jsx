import Avatar from "react-avatar";
import { Icon } from "@iconify/react";

const navbar = () => {
  return (
    <div className="bg-white top-0 sticky z-10 border-b-1 p-3 px-6 flex flex-row border-l shadow-md">
      <input
        type="text"
        placeholder="Search"
        className="w-4/5 h-10 p-4 bg-gray-100 text-text-gray rounded-xl border-inherit focus:outline-none text-base"
      />
      <div className="w-full h-10  gap-2 flex flex-row text-icon-gray justify-end items-center">
        <Icon icon="mingcute:question-line" className="w-6 h-6 hover:text-text-gray" />
        <Icon icon="material-symbols:settings-outline" className="w-6 h-6 hover:text-text-gray" />
        <Icon icon="ph:bell-bold" className="w-6 h-6 mr-2 hover:text-text-gray" />
        <Avatar name="Yusuf Sodawala" size="35px" round />
        <div className="flex flex-col text-text-black">
          <span className="text-sm font-bold">Yusuf Sodawala</span>
          <span className="text-xs text-text-gray">
            yusuf.sodawala@spit.ac.in
          </span>
        </div>
        <Icon icon="icon-park:down" className="w-6 h-6 hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:-mx-1" />
      </div>
    </div>
  );
};

export default navbar;
