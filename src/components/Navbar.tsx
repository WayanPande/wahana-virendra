import { useToggle } from "react-use";
import MenuModal from "./MenuModal";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [on, toggle] = useToggle(false);

  return (
    <>
      <div className="flex justify-between px-3 md:px-10 xl:px-28 py-3 lg:py-5 text-white absolute w-full backdrop-blur-sm z-30 text-xl">
        <div className="text-center font-bold text-sm md:text-base lg:text-xl xl:text-2xl">
          <h1>Wahana </h1>
          <h1>Virendra</h1>
        </div>
        <button
          className="lg:hidden h-fit p-3 rounded-full text-3xl"
          onClick={toggle}
        >
          <RxHamburgerMenu />
        </button>
        <div className="lg:flex lg:gap-7 xl:gap-20 items-center hidden">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            Gallery
          </a>
          <a href="#" className="hover:text-yellow-500">
            Booking Check
          </a>
          <a href="#" className="hover:text-yellow-wahana">
            About Us
          </a>
          <div className="flex gap-5">
            <button className="border-2 rounded-full px-5 py-1 text-white">
              Login
            </button>
            <button className="rounded-full px-5 py-1 bg-white text-blue-wahana">
              Register
            </button>
          </div>
        </div>
      </div>
      <MenuModal opened={on} closeModal={toggle} />
    </>
  );
};

export default Navbar;
