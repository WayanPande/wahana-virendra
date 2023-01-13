import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const FooterSection = () => {
  return (
    <footer className="h-[30rem] bg-footer-texture bg-top bg-cover flex justify-center items-center px-3 md:px-10 lg:px-20 2xl:px-56 text-white">
      <div className="flex flex-col md:flex-row gap-3 md:items-start md:text-start text-center items-center justify-between">
        <div className="w-1/3">
          <h1 className="text-yellow-wahana lg:text-2xl xl:text-3xl">
            Wahana Virendra
          </h1>
          <p className="mt-5 xl:text-xl hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            egestas nunc, urna consequat tortor iaculis nulla netus. Orci
            tincidunt mattis phasellus arcu ultrices in mi pulvinar. Odio
            placerat maecenas mi tincidunt diam.
          </p>
        </div>
        <div>
          <h1 className="lg:text-2xl xl:text-3xl">Menu</h1>
          <div className="mt-5 xl:text-xl">
            <p>Home</p>
            <p>Gallery</p>
            <p>Booking Check</p>
            <p>About Us</p>
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl xl:text-3xl">Support</h1>
          <div className="mt-5 xl:text-xl">
            <p>Syarat & Ketentuan</p>
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl xl:text-3xl">Follow us at</h1>
          <div className="flex justify-between mt-5 text-4xl">
            <BsInstagram />
            <FaFacebookF />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
