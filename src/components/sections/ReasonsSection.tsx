import Laptop from "../../assets/laptop.png";

const ReasonsSection = () => {
  return (
    <div className="mx-3 py-10 md:mx-10 lg:mx-20 2xl:mx-56 mt-52 xl:mt-80 xl:h-[26rem] rounded-xl bg-yellow-wahana-light px-5 md:px-10 xl:px-20 flex justify-end items-center relative">
      <img
        src={Laptop}
        alt="laptop"
        className="absolute xl:-left-24 lg:-left-14 lg:-top-20 xl:-top-36 w-1/2 hidden lg:block"
      />
      <div className="lg:w-1/2 flex flex-col gap-5 items-start">
        <h1 className="font-bold xl:text-3xl">Why Choose Wahana Virendra?</h1>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          egestas nunc, urna consequat tortor iaculis nulla netus.
        </p>
        <div className="flex flex-col gap-3 xl:text-lg">
          <p>✔️ Best price range</p>
          <p>✔️ Experienced for more than 10 years</p>
          <p>✔️ A variety of accommodations to choose from</p>
        </div>
        <button className="rounded-full px-7 py-3 bg-blue-wahana text-white xl:text-lg">
          About Us
        </button>
      </div>
    </div>
  );
};

export default ReasonsSection;
