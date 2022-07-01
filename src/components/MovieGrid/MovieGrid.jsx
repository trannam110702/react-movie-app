import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import tmdbApi, { movieType, tvType, category } from "../../api/tmdbApi";
import { OutlineButton } from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
import { Button } from "../Button/Button";
import "./MovieGrid.scss";
const MovieGrid = ({ params }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const getData = async () => {
      let response;
      console.log(params.keyword);
      if (params.keyword) {
        response = await tmdbApi.search(params.category, {
          params: { query: params.keyword },
        });
        console.log(response);
      } else {
        switch (params.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.popular, {
              params: { page },
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params: { page },
            });
            break;
        }
      }
      setItems(response.results);
    };
    getData();
  }, [params.category, params.keyword]);
  const loadMore = async () => {
    let response;
    switch (params.category) {
      case category.movie:
        response = await tmdbApi.getMoviesList(movieType.popular, {
          params: { page: page + 1 },
        });
        break;
      default:
        response = await tmdbApi.getTvList(tvType.popular, {
          params: { page: page + 1 },
        });
        break;
    }
    setItems([...items, ...response.results]);
    setPage((page) => page + 1);
  };
  const handleSearch = () => {
    const navigate = useNavigate();
    navigate(`/${params.catalog}/search/${params.keyword}}`);
  };
  return (
    <div className="movie-grid">
      <div className="section movie-grid__search">
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
          placeholder="Enter Keyword"
          type="text"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="section movie-grid__list">
        {items.map((item, index) => {
          return (
            <div key={index} className="item">
              <MovieCard category={params.category} item={item}></MovieCard>
            </div>
          );
        })}
      </div>
      <OutlineButton className="--loadmore" onClick={loadMore}>
        View more
      </OutlineButton>
    </div>
  );
};

export default MovieGrid;
