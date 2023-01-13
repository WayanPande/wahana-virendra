import { useClickAway, useToggle } from "react-use";

interface IProps {
  opened: Boolean;
  closeModal: (params: Boolean) => void;
}

const MenuModal: React.FC<IProps> = ({ opened, closeModal }) => {
  return (
    <>
      <div
        className={`w-full h-[100vh] backdrop-blur-sm fixed z-[999] ${
          !opened ? "hidden" : "block"
        }`}
        onClick={() => closeModal(false)}
      />
      <div
        className={`h-[100vh] w-[70%] md:w-1/2 fixed ${
          !opened
            ? "animate-[modalClose_0.5s_forwards]"
            : "animate-[modalOpen_0.5s_forwards]"
        } bg-white z-[1000] py-10`}
      >
        <div className="flex gap-5 items-center flex-col text-center">
          <a href="#" className="hover:text-yellow-500 w-full py-5">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500 w-full py-5">
            Gallery
          </a>
          <a href="#" className="hover:text-yellow-500 w-full py-5">
            Booking Check
          </a>
          <a href="#" className="hover:text-yellow-wahana w-full py-5">
            About Us
          </a>
          <div className="flex gap-5">
            <button className="border-2 rounded-full px-5 py-1 ">Login</button>
            <button className="rounded-full px-5 py-1 bg-white text-blue-wahana">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
