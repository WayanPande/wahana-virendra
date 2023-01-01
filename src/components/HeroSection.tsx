import Hero from "../assets/hero.png";
import HeroBottom from "../assets/hero-bottom.png";
import { useWindowScroll } from "react-use";

const HeroSection = () => {
  const { x, y } = useWindowScroll();

  return (
    <div className="relative w-full h-[70vh] [transform-style:preserve-3d]">
      <div className="absolute w-full left-1/2 -translate-x-1/2 top-60 z-10 font-bold text-center flex flex-col gap-3">
        <h2 className="text-white text-7xl">Welcome to</h2>
        <h1 className="text-yellow-wahana text-9xl">Wahana Virendra</h1>
      </div>
      <img
        src={Hero}
        className="w-full h-full absolute object-cover"
        style={{ top: y * -0.2 + "px" }}
        alt="Hero image"
      />
      <img
        src={HeroBottom}
        className="w-full h-full absolute object-cover z-20"
        style={{ top: y * -0.2 + "px" }}
        alt="Hero image two"
      />
    </div>
  );
};

export default HeroSection;
