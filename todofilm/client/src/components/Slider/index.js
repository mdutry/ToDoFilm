import React from 'react'
import CocktailItem from '../components/CocktailItem'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slider = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={2}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <CocktailItem />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider