import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

interface ProductImagesSliderProps {
  images: string[];
}
const ProductImagesSlider: React.FC<ProductImagesSliderProps> = ({
  images,
}) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState({} as SwiperCore);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        style={{ marginBottom: "10px" }}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((slide) => (
          <SwiperSlide key={slide}>
            <img src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((slide) => (
          <SwiperSlide key={slide}>
            <img src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImagesSlider;
