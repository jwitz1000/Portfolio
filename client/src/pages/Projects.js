import React from "react";
import projects from "../projects.json";
import Proj from "../components/Proj";

const Projects = () => {
  return (
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
      {projects.map((project) => (
        <Proj value={project}></Proj>
      ))}
    </div>
  );
};
export default Projects;
