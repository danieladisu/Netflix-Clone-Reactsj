/** @format */

import { useState, useEffect } from "react";
import "./Css/Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleHover = (index) => {
    setHoverIndex(index);
    const movie = movies[index];
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailer(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  };

  const handleLeave = () => {
    setHoverIndex(null);
    setTrailer(null);
  };

  const opts = {
    height: "90",
    width: "10%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };

  const sliderSettings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <button className="slider-next">Next</button>,
    prevArrow: <button className="slider-prev">Prev</button>,
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        <Slider className="slider" {...sliderSettings} >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="row__poster"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}>
              {hoverIndex === index ? (
                <>
                  {selectedMovie && trailer ? (
                    <  YouTube videoId={trailer} opts={opts} />
                  ) : (
                    <img  className="row__poster"
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie.name}
                    />
                  )}
                </>
              ) : (
                <img  className="row__poster"
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div  className="row__poster" style={{ padding: "40px" }}>
        {selectedMovie && trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
