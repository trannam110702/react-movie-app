import React, { useEffect } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { useParams } from "react-router-dom";
import "./Catalog.scss";
const Catalog = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <div className="catalog container">
      <div className="title">
        {params.category == "movie" ? "Movies" : "TV series"}
      </div>
      <MovieGrid params={params}></MovieGrid>
    </div>
  );
};

export default Catalog;
