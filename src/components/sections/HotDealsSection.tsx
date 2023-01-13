import Pantai from "../../assets/pantai.png";
import Janur from "../../assets/janur.png";
import Dive from "../../assets/dive.png";
import Family from "../../assets/family.png";
import HotDealsCard from "../HotDealsCard";

const HotDealsSection = () => {
  return (
    <div className="mt-72 lg:mt-80 flex items-center flex-col mx-3 md:mx-10 lg:mx-20 2xl:mx-56 gap-10">
      <h1 className="xl:self-start self-center text-2xl xl:text-4xl font-bold">
        🔥 Hot Deals
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:justify-evenly w-full gap-7 md:flex-wrap xl:flex-nowrap">
        <HotDealsCard
          key={1}
          title="50% Discount"
          desc="Ticket to Gili Trawangan"
          img={Pantai}
        />
        <HotDealsCard
          key={2}
          title="Special Price"
          desc="Galungan Kuningan Day"
          img={Janur}
        />
        <HotDealsCard key={3} title="40% Off" desc="Gili Tour" img={Dive} />
        <HotDealsCard
          key={4}
          title="Family Package"
          desc="Special Price"
          img={Family}
        />
      </div>
    </div>
  );
};

export default HotDealsSection;
