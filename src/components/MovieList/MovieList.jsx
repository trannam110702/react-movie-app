import { SwiperSlide, Swiper } from "swiper/react";
import { useState, useEffect } from "react";
import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = undefined;
      const params = { page: 1 };
      try {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, {
              params,
            });
            setItems(response.results);
            break;
          default:
            response = await tmdbApi.getTvList(props.type, {
              params,
            });
            setItems(response.results);
            break;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper slidesPerView={"auto"} grabCursor={true} spaceBetween={10}>
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCard category={props.category} item={item}></MovieCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
