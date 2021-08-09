import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Unlimited movies, TV shows, and more.</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          Watch anywhere. Cancel anytime. Lorem
        </h2>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
