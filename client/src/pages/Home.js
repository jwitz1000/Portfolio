import React from "react";
import Constants from "../constants";
import Proj from "../components/Proj";

const Home = () => {
  return (
    <div>
      <header id="header" className="parallax">
        <p className="name">Arman Riahi</p>
      </header>

      <div className="about container">
        <div>
          <div className="main mt-3">
            <div className="row">
              <div className="col-sm-12">
                <img
                  src={Constants.IMAGES.HEADSHOT}
                  className="float-left mr-3 mb-2 image-fluid"
                  alt="profile pic"
                  width="50%"
                  height="90%"
                ></img>
                <div className="quote">
                  "If this is my life, then I'm TOkyo Driftin UH" - Curry
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>

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
