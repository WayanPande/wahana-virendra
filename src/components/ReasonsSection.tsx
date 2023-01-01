import Laptop from "../assets/laptop.png";

const ReasonsSection = () => {
  return (
    <div className="mx-20 2xl:mx-56 mt-80 h-[26rem] rounded-xl bg-yellow-wahana-light px-20 flex justify-end items-center relative">
      <img
        src={Laptop}
        alt="laptop"
        className="absolute -left-24 -top-36 w-1/2"
      />
      <div className="w-1/2 flex flex-col gap-5 items-start">
        <h1 className="font-bold text-3xl">Why Choose Wahana Virendra?</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          egestas nunc, urna consequat tortor iaculis nulla netus.
        </p>
        <div className="flex flex-col gap-3 text-lg">
          <p>✔️ Best price range</p>
          <p>✔️ Experienced for more than 10 years</p>
          <p>✔️ A variety of accommodations to choose from</p>
        </div>
        <button className="rounded-full px-7 py-3 bg-blue-wahana text-white text-lg">
          About Us
        </button>
      </div>
    </div>
  );
};

export default ReasonsSection;
