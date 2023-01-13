import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import PersonOne from "../../assets/person-one.png";
import PersonTwo from "../../assets/person-two.png";
import PersonThree from "../../assets/person-three.png";
import CustomerFeedbackIcon from "../../assets/customer-feedback.png";
import { useWindowSize } from "react-use";
import CustomerCard from "../CustomerCard";

const CustomerFeedbackSection = () => {
  const { width, height } = useWindowSize();

  const slidesCount = (): number => {
    if (width >= 1440) {
      return 3;
    } else if (width >= 1024) {
      return 2;
    }

    return 1;
  };

  return (
    <div className="mt-32 xl:mt-80 mx-3 md:mx-10 lg:mx-20 2xl:mx-56">
      <div className="flex items-center gap-7">
        <img src={CustomerFeedbackIcon} alt="" />
        <h1 className="font-bold text-xl lg:text-4xl">Our Customer Feedback</h1>
      </div>
      <div className="mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay
          slidesPerView={slidesCount()}
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
