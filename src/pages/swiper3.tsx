import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Swipe3 = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true} // 🔁 무한 루프
      modules={[Navigation]}
      className="w-full max-w-[1000px] mx-auto"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <SwiperSlide key={n}>
          <div className="h-[200px] bg-gray-200 flex items-center justify-center rounded text-lg font-semibold">
            Slide {n}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipe3;
