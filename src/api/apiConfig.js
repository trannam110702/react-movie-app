const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "fe0c2ebf0b138c3bca93783ea4bac1f0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;