import React from "react";
import Constants from "../constants";
import Proj from "../components/Proj";

const Home = () => {
  return (
    <div>
      <header id="header" className="parallax">
        <p className="name">Arman Riahi</p>
      </header>
      <div class="container main mb-4 mt-3">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="bigText">Projects</div>
            <div class="borderBot">
              Click on the image thumbnails to redirect to live site for each
              project!
            </div>
          </div>
        </div>
        {Constants.PROJECTS.map((project) => (
          <Proj value={project}></Proj>
        ))}
      </div>
    </div>
  );
};
export default Home;
