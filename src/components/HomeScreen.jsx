import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyVideos}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
