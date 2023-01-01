import Pantai from "../assets/pantai.png";
import Janur from "../assets/janur.png";
import Dive from "../assets/dive.png";
import Family from "../assets/family.png";
import HotDealsCard from "./HotDealsCard";

const HotDealsSection = () => {
  return (
    <div className="mt-80 flex items-center flex-col mx-20 2xl:mx-56 gap-10">
      <h1 className="self-start text-4xl font-bold">🔥 Hot Deals</h1>
      <div className="flex justify-between w-full gap-7">
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
