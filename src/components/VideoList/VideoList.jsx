import { useState, useEffect } from "react";
import tmdbApi from "../../api/tmdbApi";
import "./VideoList.scss";
const VideoList = ({ category, id }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, id);
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, []);
  console.log(videos);
  return (
    <div className="container videolist">
      {videos.map((video, index) => {
        return (
          <div key={index} className="video">
            <div className="title">{video.name}</div>
            <iframe
              allowFullScreen="allowfullscreen"
              src={`https://www.youtube.com/embed/${video.key}`}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
