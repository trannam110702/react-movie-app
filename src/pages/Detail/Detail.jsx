import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "../../components/CastList/CastList";
import VideoList from "../../components/VideoList/VideoList";
import "./Detail.scss";
const Detail = () => {
  const [item, setItem] = useState(undefined);
  const { category, id } = useParams();
  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getMovieDetail();
  }, [category, id]);
  return (
    <>
      {item && (
        <div className="detail">
          <div
            className="detail__background"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path
              )})`,
            }}
          ></div>
          <div className="detail__content container">
            <div className="poster">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    item.poster_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="info">
              <h2 className="title">{item.title || item.name}</h2>
              <div className="genres">
                {item.genres &&
                  item.genres.map((genre, index) => {
                    return (
                      <div key={index} className="genre">
                        {genre.name}
                      </div>
                    );
                  })}
              </div>
              <p className="overview">{item.overview}</p>
              <CastList category={category} id={item.id}></CastList>
            </div>
          </div>
          <VideoList category={category} id={item.id}></VideoList>
        </div>
      )}
    </>
  );
};

export default Detail;
