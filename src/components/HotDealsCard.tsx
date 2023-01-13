import React from "react";

interface IProps {
  title: string;
  desc: string;
  img: string;
}

const HotDealsCard: React.FC<IProps> = ({ title, desc, img }) => {
  return (
    <div className="h-72 xl:h-[30rem] relative flex justify-center text-center text-white rounded-lg overflow-hidden">
      <div className="shadow-card w-full">
        <img
          src={img}
          className="w-full h-full relative z-[-2] object-cover"
          alt={title}
        />
      </div>
      <div className="absolute bottom-3">
        <p className="font-bold text-xl xl:text-3xl">{title}</p>
        <span className="text-lg xl:text-xl">{desc}</span>
      </div>
    </div>
  );
};

export default HotDealsCard;
