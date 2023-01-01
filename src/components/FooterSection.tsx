import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const FooterSection = () => {
  return (
    <footer className="h-[30rem] bg-footer-texture bg-top bg-cover flex  items-center px-20 2xl:px-56 text-white">
      <div className="flex gap-3 justify-between">
        <div className="w-1/3">
          <h1 className="text-yellow-wahana text-3xl">Wahana Virendra</h1>
          <p className="mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            egestas nunc, urna consequat tortor iaculis nulla netus. Orci
            tincidunt mattis phasellus arcu ultrices in mi pulvinar. Odio
            placerat maecenas mi tincidunt diam.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">Menu</h1>
          <div className="mt-5 text-xl">
            <p>Home</p>
            <p>Gallery</p>
            <p>Booking Check</p>
            <p>About Us</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Support</h1>
          <div className="mt-5 text-xl">
            <p>Syarat & Ketentuan</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Follow us at</h1>
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
