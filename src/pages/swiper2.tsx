// components/Swipe.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Swipe2 = () => {
  return (
    <Swiper
      className="w-[600px]"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/getbono.jpg" alt="slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/humulbono.jpg" alt="slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px] flex items-center justify-center bg-white">
          <img src="/sadbono.jpg" alt="slide 3" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe2;
