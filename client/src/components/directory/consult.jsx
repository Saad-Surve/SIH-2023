import React from "react";
import {Select, SelectItem, Button, Input} from "@nextui-org/react";

const consult = () => {
    const problem = [
        {
            value: 'crime',
            label:  'crime'
        },
        {
            value: 'fraud',
            label:  'fraud'
        }
    
    ]
  return (
    <div className="flex justify-center h-[90%] w-[80%] bg-blue-200 rounded-3xl p-4">
        <form action="" className="flex flex-col w-full justify-between items-center gap-4">
        <div className="mb-4">
            <span>Consult a Lawyer</span>
        </div>
        <div className="w-[90%] flex justify-center rounded-xl bg-white px-2 py-1">
        <Select
            variant="underlined"
            label="Problem Type"
            placeholder="Select Problem Type"
          >
            {problem.map((problem) => (
              <SelectItem key={problem.value} value={problem.value}>
                {problem.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
        <Select
            variant="underlined"
            label="Problem Type"
            placeholder="Select Problem Type"
          >
            {problem.map((problem) => (
              <SelectItem key={problem.value} value={problem.value}>
                {problem.label}
              </SelectItem>
            ))}
          </Select>
        </div><div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
        <Select
            variant="underlined"
            label="Problem Type"
            placeholder="Select Problem Type"
          >
            {problem.map((problem) => (
              <SelectItem key={problem.value} value={problem.value}>
                {problem.label}
              </SelectItem>
            ))}
          </Select>
        </div><div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
        <Input type="text" variant="underlined" label="description" placeholder="Type here..." className="border-none focus:outline-none" />
        </div>
        <Button color="primary" className="w-[50%]">Submit</Button>
        </form>
    </div>
  );
};

export default consult;
