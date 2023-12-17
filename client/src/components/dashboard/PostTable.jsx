import { Icon } from "@iconify/react";
import Avatar from "react-avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Tooltip,
} from "@nextui-org/react";

const PostTable = ({ username, rows }) => {
  // use the navigator share 
  const share = async () => {
    try {
      await navigator.share({
        title: "LegalTek",
        text: "LegalTek",
        url: "https://legaltek.vercel.app/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-icon-gray text-sm flex border-b-2 border-grey-200 pb-2">
          <th className="w-2/5 font-light pl-6">Post Details</th>
          <th className="w-1/5 font-light text-center">Type of Post</th>
          <th className="w-1/5 font-light  text-center">Date</th>
          <th className="font-light"></th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, index) => {
            const [date, fullTime] = row.postedOn.split("T");
            const [time, seconds] = fullTime.split(".");

            return (
              <tr key={index} className="flex border-b-2 border-grey-200 py-4">
                <td className="w-2/5 font-medium  pl-6 flex items-center">
                  <Avatar name={username} size="35px" round className="mr-4" />
                  <div className="flex flex-col">
                    <Tooltip
                      showArrow={true}
                      color="primary"
                      placement="bottom"
                      offset={5}
                      classNames={{
                        base: [
                          // arrow color
                          // "before:bg-neutral-400 dark:before:bg-white",
                          "before:bg-slate-800 ",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl max-w-[350px]",
                          "text-white bg-slate-800 ",
                        ],
                      }}
                      content={row.headline}
                    >
                      <span className="text-sm text-header-black">
                        {row.headline.length <= 25
                          ? row.headline
                          : row.headline.slice(0, 28) + "..."}
                      </span>
                    </Tooltip>
                  </div>
                </td>
                <td className="w-1/5 font-light  text-sm flex justify-center items-center text-header-black">
                  {row.type}
                </td>
                <td className="w-1/5 font-light  text-sm flex justify-center items-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-header-black">{date}</span>
                    <span className="text-xs text-icon-gray">{time}</span>
                  </div>
                </td>
                <td className="ml-auto font-light flex items-center">
                  <Popover placement="left-start" showArrow={true}>
                    <PopoverTrigger>
                      <Icon
                        icon="pepicons-pencil:dots-y"
                        className="mr-6 h-6 w-6 text-icon-gray hover:text-text-gray hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <Button onPress={share} color="primary" variant="light" className=" px-4">
                        <Icon icon="ri:send-plane-fill" />
                        Share
                      </Button>
                      <Button color="danger" variant="light" className="px-4">
                        <Icon icon="mdi:bin" />
                        Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            );
          })
        ) : (
          <tr className="flex font-bold  text-lg justify-center items-center text-header-black border-b-2 border-grey-200 py-10 ">
            <td>No Posts Yet, Click on Start a Post to add new Posts</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PostTable;
