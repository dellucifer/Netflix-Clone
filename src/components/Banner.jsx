import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Banner.css";
import instance from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  // https://api.themoviedb.org/3/discover/tv?api_key=24a40a860c7e16649b493db780410650&with_networks=213

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
          Math.floor(Math.random()*(request.data.results.length - 1))
        ]);
        return request;
    //   math.round(math.random()*(request.data.results.length - 1))
    }
    // console.log(movie)
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          width: 100 + "%",
        }}
        // https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <div className="banner__description">
            <h2>{truncate(movie.overview, 150)}</h2>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
