import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import classes from "./CategoryList.module.scss";

type Category = {
  id: number;
  name: string;
};

type CategoryListProps = {
  categories: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className={classes.categoryListContainer}>
      <div className={classes.categoryList}>
        <Swiper
          slidesPerView={8}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={classes.swiperContainer}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide className={classes.category} key={category.id}>
              <span>{category.name}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryList;
