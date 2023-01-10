// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";

export const MySwiper = ({ data }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-full h-full">
      {/* {data.map((data, index) => ( */}
      <SwiperSlide>
        <Image
          src={data}
          // key={index}
          alt=""
          width="100%"
          height="100%"
          layout="responsive"
        />
      </SwiperSlide>
      {/* ))} */}
    </Swiper>
  );
};
