import React, { useState, useRef, useEffect } from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Pagination, Autoplay]);

interface ImagesOnHoverProps {
  images: string[];
  alt: string;
}

const ImagesOnHover: React.FC<ImagesOnHoverProps> = ({ images, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (swiperRef.current) {
      if (isHovered) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 1000 }}
        className="swiper-container"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={alt} className="slideshow-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesOnHover;
