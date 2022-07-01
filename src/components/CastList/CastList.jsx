import "./CastList.scss";
import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
const CastList = ({ id, category }) => {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredit = async () => {
      const response = await tmdbApi.credits(category, id);
      setCasts(response.cast);
    };
    getCredit();
  }, []);
  return (
    <div className="castlist">
      <h2>Casts</h2>
      <div className="content">
        {casts.slice(0, 5).map((cast, index) => {
          return (
            <div key={index} className="cast">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    cast.profile_path
                  )})`,
                }}
              ></div>
              <div className="name">{cast.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastList;
