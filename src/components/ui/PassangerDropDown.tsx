import React, { useState } from "react";
import { useCounter } from "react-use";
import Counter from "./Counter";

interface IProps {
  state: boolean;
  toggleState: () => void;
}

const PassangerDropDown: React.FC<IProps> = ({ state, toggleState }) => {
  const [passangerCount, setPassangerCount] = useState<number[]>([]);

  const [
    adult,
    { inc: incAdult, dec: decAdult, set: setAdult, reset: resetAdult },
  ] = useCounter(1, null, 1);
  const [
    child,
    { inc: incChild, dec: decChild, set: setChild, reset: resetChild },
  ] = useCounter(0, null, 0);
  const [
    invant,
    { inc: incInvant, dec: decInvant, set: setInvant, reset: resetInvant },
  ] = useCounter(0, null, 0);

  const countHandler = () => {
    setPassangerCount([adult, child, invant]);
    toggleState();
  };

  return (
    <div className="xl:w-1/2 h-24 rounded-xl bg-blue-wahana-light p-3 w-full lg:w-fit grow relative cursor-pointer hover:bg-[#BCF3FC]">
      <div onClick={toggleState}>
        <span className="text-xs text-gray-wahana">TRAVELER</span>
        <p className="text-sm font-bold">
          {passangerCount.length < 1
            ? 1
            : passangerCount[0] + passangerCount[1] + passangerCount[2]}{" "}
          Traveler
        </p>
        <p className="text-xs text-gray-wahana mt-2 truncate ...">Economy</p>
      </div>
      <div
        className={`w-96 bg-white ${
          !state ? "hidden" : "absolute"
        } top-[110%] left-0 lg:left-auto lg:right-0 xl:left-0 xl:right-auto rounded-xl p-3 flex flex-col border-gray-200 border-2 cursor-default`}
      >
        <div className="flex flex-col gap-3">
          <Counter
            key="Dewasa"
            title="Dewasa"
            desc="12 thn atau lebih"
            value={adult}
            inc={incAdult}
            dec={decAdult}
          />
          <Counter
            key="Anak"
            title="Anak"
            desc="2 - 11 thn"
            value={child}
            inc={incChild}
            dec={decChild}
          />
          <Counter
            key="Bayi"
            title="Bayi"
            desc="di bawah 2 tahun"
            value={invant}
            inc={incInvant}
            dec={decInvant}
          />
          <button
            className="mt-3 bg-yellow-wahana py-1 rounded-lg"
            onClick={countHandler}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassangerDropDown;
