import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";
import "swiper/css";
import classes from "./Slider.module.scss";
import { SwiperModule } from "swiper/types";

SwiperCore.use([Navigation, Scrollbar, A11y, Mousewheel]);

interface VerticalSliderProps {
  slides: JSX.Element[];
}

interface SwiperProps {
  direction: "vertical" | "horizontal" | undefined;
  slidesPerView: number;
  spaceBetween: number;
  mousewheel: boolean;
  modules?: SwiperModule[];
}
const VerticalSlider: React.FC<VerticalSliderProps> = ({ slides }) => {
  const swiperParams: SwiperProps = {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    modules: [Mousewheel, Navigation],
  };

  return (
    <Swiper {...swiperParams} className={classes.swiper}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSlider;
