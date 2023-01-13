import Pantai from "../assets/pantai.png";

const PromoSection = () => {
  return (
    <div className="mt-[39rem] lg:mt-96 flex flex-col xl:flex-row gap-5 justify-between mx-3 md:mx-10 lg:mx-20 2xl:mx-56">
      <div className="flex bg-yellow-wahana-light xl:w-[35rem] rounded-lg">
        <img src={Pantai} className="rounded-lg xl:h-[20.75rem]" alt="pantai" />
        <div className="p-5 flex justify-between flex-col">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl">Special Promo</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="rounded-full px-7 py-2 w-fit bg-yellow-wahana font-bold text-black">
            Book Now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col gap-3">
        <div className="flex bg-[#D6FFE1] w-full h-full rounded-lg">
          <img src={Pantai} className="rounded-lg h-40" alt="pantai" />
          <div className="p-3 flex justify-between flex-col">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-bold ">Special Promo</h3>
              <p className="text-xs">Lorem ipsum dolor, sit amet</p>
            </div>
            <button className="rounded-full px-3 py-2 w-fit bg-yellow-wahana font-bold text-black text-xs">
              Book Now
            </button>
          </div>
        </div>
        <div className="flex bg-[#D6FFE1] w-full h-full rounded-lg">
          <img src={Pantai} className="rounded-lg h-40" alt="pantai" />
          <div className="p-3 flex justify-between flex-col">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-bold ">Special Promo</h3>
              <p className="text-xs">Lorem ipsum dolor, sit amet</p>
            </div>
            <button className="rounded-full px-3 py-2 w-fit bg-yellow-wahana font-bold text-black text-xs">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-[#EEFCFF] xl:w-[35rem] rounded-lg">
        <img src={Pantai} className="rounded-lg xl:h-[20.75rem]" alt="pantai" />
        <div className="p-5 flex justify-between flex-col">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl">Special Promo</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="rounded-full px-7 py-2 w-fit bg-yellow-wahana font-bold text-black">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
