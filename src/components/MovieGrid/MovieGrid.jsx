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
  useEffect(() => {
    const getData = async () => {
      let response;
      if (params.keyword) {
        response = await tmdbApi.search(params.category, {
          params: { query: params.keyword, page: 1 },
        });
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
    if (params.keyword) {
      response = await tmdbApi.search(params.category, {
        params: { query: params.keyword, page: page + 1 },
      });
    } else
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

  return (
    <div className="movie-grid">
      <Search params={params}></Search>
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
export const Search = ({ params }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (keyword.trim() !== "")
      navigate(`/${params.category}/search/${keyword}`);
    setKeyword("");
  };
  return (
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
  );
};
export default MovieGrid;
