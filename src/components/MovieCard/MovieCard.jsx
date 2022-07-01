import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import "./MovieCard.scss";
const MovieCard = (props) => {
  const background = apiConfig.w500Image(props.item.poster_path);
  const link = `/${props.category}/${props.item.id}`;
  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <h3>{props.item.title || props.item.name}</h3>
    </Link>
  );
};

export default MovieCard;
