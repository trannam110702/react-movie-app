import React from "react";
import apiConfig from "../../api/apiConfig";
import "./HeroSlideItem.scss";
import { Button, OutlineButton } from "../Button/Button";

import { useState, useEffect } from "react";
const HeroSlideItem = ({ movieInfo }) => {
  const background = apiConfig.originalImage(movieInfo.backdrop_path);
  return (
    <div
      className="hero-slide__item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{movieInfo.title}</h2>
          <div className="overview">{movieInfo.overview}</div>
          <div className="buttons">
            <Button>Watch now</Button>
            <OutlineButton>Watch trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(movieInfo.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
