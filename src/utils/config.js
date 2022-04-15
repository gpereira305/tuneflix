const apiURL = "https://api.themoviedb.org/3/";
const apiKey = "467520b057249a7e0a457ab0984e2623";
const imageBaseURL = "http://image.tmdb.org/t/p/";
const banner = "w1280";
const poster = "w500";

const searchBaseURL = `${apiURL}search/movie?api_key=${apiKey}&query=`;
const nowPlayingURL = `${apiURL}movie/now_playing?api_key=${apiKey}`;
const popularMoviesURL = `${apiURL}movie/popular?api_key=${apiKey}`;

export {
  apiURL,
  banner,
  poster,
  imageBaseURL,
  searchBaseURL,
  nowPlayingURL,
  popularMoviesURL,
};
