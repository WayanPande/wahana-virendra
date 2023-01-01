import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import PersonOne from "../assets/person-one.png";
import PersonTwo from "../assets/person-two.png";
import PersonThree from "../assets/person-three.png";
import CustomerCard from "./CustomerCard";
import CustomerFeedbackIcon from "../assets/customer-feedback.png";

const CustomerFeedbackSection = () => {
  return (
    <div className="mt-80 mx-20 2xl:mx-56">
      <div className="flex items-center gap-7">
        <img src={CustomerFeedbackIcon} alt="" />
        <h1 className="font-bold text-4xl">Our Customer Feedback</h1>
      </div>
      <div className="mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="h-[20rem] lg:h-[24rem] cursor-grab active:cursor-grabbing"
        >
          <SwiperSlide>
            <CustomerCard img={PersonOne} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard img={PersonTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard img={PersonThree} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard img={PersonOne} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard img={PersonTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard img={PersonThree} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerFeedbackSection;
