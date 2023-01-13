import React from "react";
import { useCounter } from "react-use";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface IProps {
  title: string;
  desc: string;
  value: number;
  inc: (delta: number) => void;
  dec: (delta: number) => void;
}

const Counter: React.FC<IProps> = ({ title, desc, value, dec, inc }) => {
  //   const [value, { inc, dec, set, reset }] = useCounter(1, null, 1);

  return (
    <div className="flex gap-3 justify-between items-center">
      <div>
        <p className="font-bold">{title}</p>
        <span>({desc})</span>
      </div>
      <div className="flex text-center items-center justify-between w-[30%]">
        <button
          className="p-2 h-1/2 flex items-center font-bold  "
          onClick={() => dec(1)}
        >
          <AiOutlineMinus />
        </button>
        <div className="w-full flex flex-col gap-1">
          <p className="w-full">{value}</p>
          <hr />
        </div>
        <button
          className="p-2  h-1/2 flex items-center font-bold   "
          onClick={() => inc(1)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
