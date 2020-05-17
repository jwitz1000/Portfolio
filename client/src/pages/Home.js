import React from "react";
import Constants from "../assets/constants";

const Home = () => {
  return (
    <div>
      <div className="triangle" />
      <div className="box" />
      <div className="container main mt-3">
        <div className="row">
          <div className="col-sm-12">
            <div className="title">Bio</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <img
              src={Constants.IMAGES.HEADSHOT}
              className="float-left mr-3 mb-2 image-fluid"
              alt="profile pic"
              width="200"
              height="200"
            ></img>
            <p>
              Full Stack Web Developer with a background in chemical engineering
              aiming to build meaningful projects on the web. Recently received
              a certificate in full stack development from UC Berkeley Extension
              where a diverse skill set and portfolio were developed. Technical
              skills such as Node.js, Express, MongoDB, MySQL, React, Python,
              Javascript, and MATLAB are complemented with excellent
              communication and teamwork strengths. Known as a hard worker who
              produces high-quality results with attention to detail. Ambitious
              to apply a unique problem-solving skill set while continuing to
              learn. I will go above and beyond to hit deadlines and assist team
              members.
            </p>
          </div>
        </div>
      </div>
      <div className="container main mt-3 mb-4">
        <div className="row">
          <div className="col-sm-12">
            <div className="title">Background</div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-12">
            <h6>Education</h6>
            <p>
              -Completed Full Stack Development program at UC Berkely Extension
              in San Francisco
            </p>
            <p>
              -Graduated from UC Davis with a Bachelor of Science in Chemical
              Engineering in 2019
            </p>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-12">
            <h6>Recent Endeavors</h6>
            <p>
              -Taught a python course at eBay's coding bootcamp for young
              students during 2019
            </p>
            <p>
              -Research Assistant In Block Lab Group at UC Davis from 2016-2019
            </p>
            <p>
              -Bioprocess Technology Intern at Marrone Bio Innovations during
              2018
            </p>
            <p>
              -Engineering tutor in the department of Chemical Engineering at UC
              Davis during 2018
            </p>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-sm-12">
            <h6>Interests and Hobbies</h6>
            <p>-Oil painting</p>
            <p>-Hiking</p>
            <p>-DJ and Event planner</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
