import { api_key } from "../constants";
import { apiRequest } from "./axios";

const base_url = "https://api.themoviedb.org/3/";

const trendingMovie = `${base_url}trending/movie/day?api_key=${api_key}`;
const movieUpcoming = `${base_url}movie/upcoming?api_key=${api_key}`;
const topRated = `${base_url}movie/top_rated?api_key=${api_key}`;
const popularMovie = `${base_url}movie/popular?api_key=${api_key}`;

export const fetchTrendingMovie = async () => {
  return apiRequest(trendingMovie);
};

export const fetchUpcomingMovie = async () => {
  return apiRequest(movieUpcoming);
};

export const fetchTopRatedMovie = async () => {
  return apiRequest(topRated);
};
export const fetchPopularMovie = async () => {
    return apiRequest(popularMovie);
  };
  

export const image500 = (posterPath) => {
  return  posterPath ? `https://image.tmdb.org/t/p/w500` + posterPath : null;
};

export const image342 = (posterPath) => {
 return  posterPath ? `https://image.tmdb.org/t/p/w342` + posterPath : null;
};

export const image185 = (posterPath) => {
   return  posterPath ? `https://image.tmdb.org/t/p/w185` + posterPath : null;
};
  
