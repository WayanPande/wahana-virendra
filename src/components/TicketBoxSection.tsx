import { useState } from "react";
import Ship from "../assets/ship.png";
import Transfer from "../assets/transfer.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TicketBoxSection = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="xl:w-[60%] 2xl:w-[55%] bg-white absolute left-1/2 -translate-x-1/2 top-[32rem] rounded-2xl shadow-md px-5 py-12 flex flex-col gap-10 z-30">
      <div className="flex justify-between">
        <button className="rounded-full px-5 py-1 border-2 border-yellow-wahana flex gap-3">
          <img src={Ship} className="w-5" alt="ship" />
          Ship Ticket
        </button>
        <div className="flex gap-5">
          <div className="flex items-center mb-4">
            <input
              id="trip-option-1"
              type="radio"
              name="countries"
              value="USA"
              className="h-4 w-4 border-blue-wahana "
              aria-labelledby="trip-option-1"
              aria-describedby="trip-option-1"
              checked
            ></input>
            <label
              htmlFor="trip-option-1"
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              One-way
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="trip-option-2"
              type="radio"
              name="countries"
              value="USA"
              className="h-4 w-4 border-blue-wahana "
              aria-labelledby="trip-option-2"
              aria-describedby="trip-option-2"
            ></input>
            <label
              htmlFor="trip-option-2"
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              Round-trip
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-4 w-fit grow">
          <div className="xl:w-52 2xl:w-60 h-24 rounded-xl bg-blue-wahana-light pl-3 py-1 flex flex-col justify-center">
            <div className="flex justify-between items-end pr-7">
              <div>
                <span className="text-xs text-gray-wahana">FROM</span>
                <p className="text-sm font-bold">Padangbai</p>
              </div>
              <img src={Ship} className="w-8 h-8" alt="ship" />
            </div>
            <p className="text-xs text-gray-wahana mt-2 truncate ...">
              Padangbai Port, Karangasem, bali
            </p>
          </div>
          <div className="w-12 h-12 border-4 border-white bg-blue-wahana-light rounded-full absolute xl:left-[13.2rem] 2xl:left-[15.3rem] top-[9.2rem] flex justify-center items-center">
            <img src={Transfer} alt="transfer" />
          </div>
          <div className="xl:w-52 2xl:w-60 h-24 rounded-xl bg-blue-wahana-light pl-7 pr-3 py-1 flex flex-col justify-center">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs text-gray-wahana">TO</span>
                <p className="text-sm font-bold">Gili Trawangan</p>
              </div>
              <img src={Ship} className="w-8 h-8" alt="ship" />
            </div>
            <p className="text-xs text-gray-wahana mt-2 truncate ...">
              Gili Trawangan Port, Gili Island, Lombok
            </p>
          </div>
        </div>
        <div className="w-full h-fit rounded-xl bg-blue-wahana-light grow flex justify-evenly divide-x divide-blue-wahana overflow-hidden">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            customInput={
              <button className="flex justify-center items-start flex-col w-full h-24 active:bg-[#BCF3FC] hover:bg-[#BCF3FC]">
                <span className="text-[0.6rem] text-gray-wahana ml-5">
                  JOURNEY DATE
                </span>
                <p className="text-sm font-bold mt-1 ml-5">
                  12{" "}
                  <span className="text-[0.6rem] text-gray-wahana">Jan'23</span>
                </p>
                <p className="text-[0.6rem] text-gray-wahana ml-5">
                  09.00 WITA
                </p>
              </button>
            }
          />
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            customInput={
              <button className="flex justify-center items-start flex-col w-full h-24 active:bg-[#BCF3FC] hover:bg-[#BCF3FC]">
                <span className="text-[0.6rem] text-gray-wahana ml-5">
                  JOURNEY DATE
                </span>
                <p className="text-sm font-bold mt-1 ml-5">
                  12{" "}
                  <span className="text-[0.6rem] text-gray-wahana">Jan'23</span>
                </p>
                <p className="text-[0.6rem] text-gray-wahana ml-5">
                  09.00 WITA
                </p>
              </button>
            }
          />
        </div>
        <div className="w-1/2 h-24 rounded-xl bg-blue-wahana-light p-3  grow-0">
          <span className="text-xs text-gray-wahana">TRAVELER</span>
          <p className="text-sm font-bold">1 Traveler</p>
          <p className="text-xs text-gray-wahana mt-2 truncate ...">Economy</p>
        </div>
      </div>
      <button className="rounded-full px-10 py-3 w-fit mx-auto bg-yellow-wahana font-bold text-black">
        Search Schedule
      </button>
    </div>
  );
};

export default TicketBoxSection;
