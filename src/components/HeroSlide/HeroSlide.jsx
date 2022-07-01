import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import HeroSlideItem from "../HeroSlideItem/HeroSlideItem";
import TrailerModal from "../TrailerModal/TrailerModal";

import "swiper/css";
import "./HeroSlide.scss";

const HeroSlide = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params: { page: 1 },
      });
      setMovies(response.results.slice(3, 7));
    };
    getMovies();
  }, []);
  return (
    <Swiper
      className="hero-slide"
      modules={[Autoplay]}
      slidesPerView={1}
      grabCursor={true}
      autoplay={{ delay: 3000 }}
    >
      {movies.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <HeroSlideItem movieInfo={movie}></HeroSlideItem>
            <TrailerModal id={movie.id} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlide;
