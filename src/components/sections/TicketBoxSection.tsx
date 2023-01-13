import { useState } from "react";
import Ship from "../../assets/ship.png";
import Transfer from "../../assets/transfer.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToggle } from "react-use";
import PassangerDropDown from "../ui/PassangerDropDown";

const TicketBoxSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [backdropOn, toggleBackdrop] = useToggle(false);
  const [passangerDropdown, togglePassangerDropdown] = useToggle(false);

  const toggleHandler = () => {
    toggleBackdrop(false);
    togglePassangerDropdown(false);
  };

  return (
    <>
      <div
        className="w-full md:w-[80%] lg:w-[85%] xl:w-[60%] 2xl:w-[55%] bg-white absolute left-1/2 -translate-x-1/2 top-[20rem] lg:top-[32rem] rounded-2xl shadow-md px-5 py-12 flex flex-col gap-10 z-50 "
        onClick={() => toggleBackdrop(true)}
      >
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
        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="flex gap-1 lg:gap-4 w-full lg:w-fit  flex-col lg:flex-row">
            <div className="lg:w-52 2xl:w-60 h-24 rounded-xl bg-blue-wahana-light pl-3 py-1 pr-3 lg:pr-5 xl:pr-0 flex flex-col justify-center">
              <div className="flex justify-between items-end xl:pr-7">
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
            <div className="w-12 h-12 border-4 border-white bg-blue-wahana-light rounded-full absolute right-8 lg:left-[13.2rem] 2xl:left-[15.3rem] top-48 lg:top-[9.2rem] flex justify-center items-center">
              <img
                src={Transfer}
                className="rotate-90 lg:rotate-0"
                alt="transfer"
              />
            </div>
            <div className="lg:w-52 2xl:w-60 h-24 rounded-xl bg-blue-wahana-light pl-3 lg:pl-7 pr-3 py-1 flex flex-col justify-center">
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
          <div className="w-full lg:w-fit xl:w-full h-fit rounded-xl bg-blue-wahana-light grow flex justify-evenly divide-x divide-blue-wahana overflow-hidden">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              showTimeSelect
              customInput={
                <button className="flex justify-center items-start flex-col w-full h-24 active:bg-[#BCF3FC] hover:bg-[#BCF3FC]">
                  <span className="text-[0.6rem] text-gray-wahana ml-5">
                    JOURNEY DATE
                  </span>
                  <p className="text-sm font-bold mt-1 ml-5">
                    {startDate.getDate()}{" "}
                    <span className="text-[0.6rem] text-gray-wahana">
                      {startDate.toLocaleDateString("en-us", {
                        month: "short",
                      })}
                      '{startDate.getFullYear()}
                    </span>
                  </p>
                  <p className="text-[0.6rem] text-gray-wahana ml-5">
                    {startDate.getHours()}:{startDate.getMinutes()} WITA
                  </p>
                </button>
              }
            />
            <DatePicker
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
              showTimeSelect
              customInput={
                <button className="flex justify-center items-start flex-col w-full h-24 active:bg-[#BCF3FC] hover:bg-[#BCF3FC]">
                  <span className="text-[0.6rem] text-gray-wahana ml-5">
                    RETURN DATE
                  </span>
                  <p className="text-sm font-bold mt-1 ml-5">
                    {returnDate.getDate()}{" "}
                    <span className="text-[0.6rem] text-gray-wahana">
                      {returnDate.toLocaleDateString("en-us", {
                        month: "short",
                      })}
                      '{returnDate.getFullYear()}
                    </span>
                  </p>
                  <p className="text-[0.6rem] text-gray-wahana ml-5">
                    {returnDate.getHours()}:{returnDate.getMinutes()} WITA
                  </p>
                </button>
              }
            />
          </div>
          <PassangerDropDown
            state={passangerDropdown}
            toggleState={togglePassangerDropdown}
          />
        </div>
        <button className="rounded-full px-10 py-3 w-fit mx-auto bg-yellow-wahana font-bold text-black">
          Search Schedule
        </button>
      </div>
      <div
        className={`w-full h-full top-0 bg-black/60 fixed z-40 ${
          !backdropOn ? "hidden" : "block"
        }`}
        onClick={toggleHandler}
      />
    </>
  );
};

export default TicketBoxSection;
