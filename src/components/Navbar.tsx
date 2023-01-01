const Navbar = () => {
  return (
    <div className="flex justify-between px-28 py-5 text-white absolute w-full backdrop-blur-sm z-30 text-xl">
      <div className="text-center font-bold text-2xl">
        <h1>Wahana </h1>
        <h1>Virendra</h1>
      </div>
      <div className="flex gap-20 items-center ">
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
  );
};

export default Navbar;
