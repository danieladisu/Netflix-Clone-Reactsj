/** @format */

const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;
// const base_url = "https://image.tmdb.org/t/p/original/";

const base_url = "https://api.themoviedb.org/3";

const requests = {
  fetchTrendin: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=de-de`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=de-DE`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=de-DE`,
  fetchRealityTV: `/discover/tv?api_key=${API_KEY}&with_genres=11164`,
  fetchPopularShows: `/tv/popular?api_key=${API_KEY}&language=de-de`,
  fetchTopRatedShows: `/tv/top_rated?api_key=${API_KEY}&language=de-de`,
  fetchAiringTodayShows: `/tv/airing_today?api_key=${API_KEY}&language=de-de`,
  fetchOnTheAirShows: `/tv/on_the_air?api_key=${API_KEY}&language=de-de`,
  fetchTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,


};

const movies = (word) => {
  console.log(requests[word]);

  return axios
    .get(`${base_url}${requests[word]}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

router.get("/api/:searchTerm", async (req, res) => {
  try {
    // console.log(req.params.searchTerm);
    res.json(await movies(req.params.searchTerm));
  } catch (error) {
    res.json(error);
  }
});



module.exports = router;
