/** @format */

import { useState, useEffect } from "react";
import "./Css/Row.css";
// import axios1 from "./axios";
import axios from "axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const base_url = "https://api.themoviedb.org/3";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios1.get(fetchUrl);
  //     // console.log(request.data.results);
  //     setMovies(request.data.results);
  //   }
  //   fetchData();
  // }, [fetchUrl]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://localhost:2000/api/${fetchUrl}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (selectedMovie === movie) {
      setSelectedMovie(null);
      setTrailer(null);
    } else {
      setSelectedMovie(movie);
      setTrailer(null);
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };
  const sliderSettings = {
    // centerMode: true,
    // centerPadding: 0,
    // objectFit: false,

    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <button className="slider-next  ">Next</button>,
    prevArrow: <button className="slider-prev">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="row">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold ">
        {title}
      </p>

      <div className="row__posters">
        {" "}
        <Slider className="slider bg-zinc-00 object-cover " {...sliderSettings}>
          {movies?.map((movie) => (
            <div
              className="group bg-zinc-00 col-span relative h-[12-vw] w-full flex "
              key={movie.id}>
              <img
                onClick={handleClick}
                className="row__poster cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-200 w-full h-[12vw]"
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div className="row__poster opacity-0 absolute top-0 transition duration-0 z-10 invsible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[2vw] group-hover:-translate-x-[0vw] group-hover:opacity-100 ">
                <img
                  onClick={handleClick}
                  className="row__poster cursor-pointer object-cover transition duration shadow-xl rounded-t-md  w-full h-[13vw] z-100 "
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </div>
            </div>
          ))}

          <div onClick={handleClick} style={{ padding: "40px" }}>
            {selectedMovie && trailer && (
              <YouTube videoId={trailer} opts={opts} />
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Row;
