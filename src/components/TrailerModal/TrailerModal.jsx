import React, { useState, useEffect } from "react";
import "./TrailerModal.scss";
import tmdbApi from "../../api/tmdbApi";
const TrailerModal = ({ id }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getTrailer = async () => {
      const response = await tmdbApi.getVideos("movie", id);
      setTrailer(response.results[0]);
    };
    getTrailer();
  }, []);
  return (
    <div className="trailer-modal">
      <div className="close">x</div>
      <iframe
        allowFullScreen={true}
        src={`https://www.youtube.com/embed/${trailer.key}`}
      ></iframe>
    </div>
  );
};

export default TrailerModal;
