/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Auth from "./Auth/Auth";

import Row from "./components/Row";

// import requests from "./components/requests";
import Common from "./components/Common";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Common />}>
            <Route
              exact
              path="/"
              element={
                <>
                  <Row
                    title="NETFLIX ORIGINALS"
                    fetchUrl="fetchNetflixOriginals"
                    isLargeRow
                  />
                  <Row title="Trending Now" fetchUrl="fetchTrendin " />
                  <Row title="Top Rated" fetchUrl="fetchTopRatedMovies" />
                  <Row title="Action Movies" fetchUrl="fetchActionMovies" />
                  <Row title="Comedy Movies" fetchUrl="fetchComedyMovies" />
                  <Row title="Horror Movies" fetchUrl="fetchHorrorMovies" />
                  <Row title="Romance Movies" fetchUrl="fetchRomanceMovies" />
                </>
              }
            />

            <Route
              path="/tv"
              element={
                <>
                  <Row title="Top Rated TV" fetchUrl="fetchTopRatedTV" />
                  <Row title="Popular TV" fetchUrl="fetchPopularTV" />

                  <Row title="Popular TV" fetchUrl="fetchRealityTV" />
                </>
              }
            />
            <Route
              path="/shows"
              element={
                <>
                  <Row title="Popular TV" fetchUrl="fetchPopularShows" />
                  <Row title="Top Rated TV" fetchUrl="fetchTopRatedShows" />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Row title="Trending Now" fetchUrl="fetchTrendin" />
                  <Row title="Top Rated" fetchUrl="fetchTopRatedMovies" />
                  <Row title="Action Movies" fetchUrl="fetchActionMovies" />
                  <Row title="Comedy Movies" fetchUrl="fetchComedyMovies" />
                </>
              }
            />
            <Route
              path="/originals"
              element={
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchUrl="fetchNetflixOriginals"
                  isLargeRow
                />
              }
            />
          </Route>
          <Route
            path="/myList"
            element={
              <h1 className="bg-white text-center pt-40 fontSize.2xl">
                Wolcomme
              </h1>
            }
          />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
