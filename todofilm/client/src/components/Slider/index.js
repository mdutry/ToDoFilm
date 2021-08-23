// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import ItemFilm from '../Items/ItemFilm';
import ItemSerie from "../Items/ItemSerie";
import ItemPerson from "../Items/ItemPerson";
import './styles.css'

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slider = ({ moviesList, seriesList, personsList }) => {
    return (
        <Swiper
            effect='slide'
            autoplay
            delay={500}
            slidesPerView={4}
            spaceBetween={2}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
        >
            {
                moviesList
                && moviesList.map(movie =>
                    <SwiperSlide key={movie.id}>
                        <ItemFilm id={movie.id} poster={movie.poster_path} title={movie.title} />
                    </SwiperSlide>
                )
            }
            {
                seriesList
                && seriesList.map(serie =>
                    <SwiperSlide key={serie.id}>
                        <ItemSerie id={serie.id} poster={serie.poster_path} title={serie.name} />
                    </SwiperSlide>
                )
            }
            {
                personsList
                && personsList.map(person =>
                    <SwiperSlide key={person.id}>
                        <ItemPerson id={person.id} poster={person.profile_path} name={person.name} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default Slider