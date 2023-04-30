import React from "react";
import Tags from "./../components/Tags";
import Pagination from "../components/Pagination";
import VideoGrid from "./../components/grid/VideoGrid";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
