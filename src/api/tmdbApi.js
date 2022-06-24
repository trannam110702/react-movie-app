import axiosClient from "./axiosClient";
export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};
export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};
const tmdbApi = {
  getMoviesList: (type, params) => {
    const endPoint = "movie/" + movieType[type];
    return axiosClient.get(endPoint, params);
  },
  getTvList: (type, params) => {
    const endPoint = "tv/" + tvType[type];
    return axiosClient.get(endPoint, params);
  },
  getVideos: (cate, id) => {
    const endPoint = category[cate] + "/" + id + "/videos";
    return axiosClient.get(endPoint, { params: {} });
  },
  search: (cate, params) => {
    const endPoint = "search/" + category[cate];
    return axiosClient.get(endPoint, params);
  },
  detail: (cate, id, params) => {
    const endPoint = category[cate] + "/" + id;
    return axiosClient.get(endPoint, params);
  },
  credits: (cate, id) => {
    const endPoint = category[cate] + "/" + id + "/credits";
    return axiosClient.get(endPoint, { params: {} });
  },
  similar: (cate, id) => {
    const endPoint = category[cate] + "/" + id + "/similar";
    return axiosClient.get(endPoint, { params: {} });
  },
};

export default tmdbApi;
