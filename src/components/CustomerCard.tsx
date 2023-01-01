import React from "react";
import { BsStarFill } from "react-icons/bs";

interface IProps {
  img: string;
}

const CustomerCard: React.FC<IProps> = ({ img }) => {
  return (
    <div className="border-2 border-[#E7EAEC] rounded-lg p-5 h-4/5 flex flex-col justify-around">
      <div className="flex justify-between">
        <img src={img} className="w-16" alt="person" />
        <div className="flex gap-3 text-lg">
          <BsStarFill className="text-[#F8A401]" />
          <BsStarFill className="text-[#F8A401]" />
          <BsStarFill className="text-[#F8A401]" />
          <BsStarFill className="text-[#F8A401]" />
          <BsStarFill className="text-[#F8A401]" />
        </div>
      </div>
      <p className="font-bold text-2xl">Floyd Miles</p>
      <span>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia
      </span>
    </div>
  );
};

export default CustomerCard;
