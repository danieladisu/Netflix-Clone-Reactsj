/** @format */

import React, { useEffect, useState } from "react";
import "./Css/Banner.css";
import axios from "axios";
// import requests from "./requests";
// const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [Movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(
          `http://localhost:2000/api/fetchNetflixOriginals`
        );
        console.log("Frontend response data:", request.data);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  // truncate(Movie.overview, 150);

  return (
    <header
      className="banner  w-full h-cover-full bg-cover cover-fill"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <div className="iner__banner__contents">
          <h1 className="banner__title">
            {Movie.title || Movie.name || Movie.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button"> play</button>
            <button className="banner__button"> my List</button>
          </div>

          <h1 className="banner__description">
            {Movie.overview && truncate(Movie.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeBottom w-full mt-96" />
    </header>
  );
}

export default Banner;

// Get-ExecutionPolicy -List
// Set-ExecutionPolicy Unrestricted
// Set-ExecutionPolicy Unrestricted -Force
// npm i firebase
// npm install -g firebase-tools

// useEffect(() => {
//   async function fetchData() {
//     // const request = await axios.get(requests.fetchNetflixOriginals);
//     // const request = await axios.get("http://localhost:2000/api/banner");

//     //   console.log(request?.data.results);
//     setMovie(
//       request.data.results[
//         Math.floor(Math.random() * request.data.results.length)
//       ]
//     );
//     return request;
//   }
//   fetchData();
// }, []);
// //   console.log(Movie);
