// components/Swipe.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swipe = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/slide1.png" alt="slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/slide2.png" alt="slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/slide3.png" alt="slide 3" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe;
