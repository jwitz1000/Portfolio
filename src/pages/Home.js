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
              <div className="info col-lg-3">
                <img
                  src={Constants.IMAGES.HEADSHOT}
                  className="profile"
                  alt="profile pic"
                ></img>
              </div>
              <div className="info col-lg-9">
                <p className="quote">
                  "If this is my life, then I'm TOkyo Driftin UH" - Curry
                </p>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>

      <div class=" mb-4 ">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="bigText">Projects</div>
            <div class="borderBot">
              <div className="text">
                Click on the image thumbnails to redirect to live site for each
                project!
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {Constants.PROJECTS.map((project) => (
            <Proj value={project}></Proj>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
