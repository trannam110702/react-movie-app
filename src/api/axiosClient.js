import axios from "axios";
import qs from "query-string";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-type": "appl",
  },
  paramsSerializer: (param) => {
    qs.stringify({ ...param, api_key: apiConfig.apiKey });
  },
});
export default axiosClient;
