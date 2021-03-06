import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSlide from "../components/HeroSlide/HeroSlide";
import { OutlineButton } from "../components/Button/Button";
import MovieList from "../components/MovieList/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = (type) => {
    navigate(`/${type}`);
  };
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending moives</h2>
            <OutlineButton onClick={() => handleOnClick("movie")}>
              View more
            </OutlineButton>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.popular}
          ></MovieList>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated moives</h2>
            <OutlineButton onClick={() => handleOnClick("movie")}>
              View more
            </OutlineButton>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.top_rated}
          ></MovieList>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV series</h2>
            <OutlineButton onClick={() => handleOnClick("tv")}>
              View more
            </OutlineButton>
          </div>
          <MovieList category={category.tv} type={tvType.popular}></MovieList>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated TV series</h2>
            <OutlineButton onClick={() => handleOnClick("tv")}>
              View more
            </OutlineButton>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}></MovieList>
        </div>
      </div>
    </div>
  );
};

export default Home;
