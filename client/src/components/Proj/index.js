import React from "react";

function Proj(props) {
  console.log(props);
  return (
    <div class="row slot">
      <div class="col-sm-3">
        <a href={props.value.link}>
          <img
            src={props.value.image}
            class="image-responsive"
            width="100%"
            alt="project image"
          />
        </a>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-12">
            <div class="titleSmall">{props.value.title}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div>{props.value.description}</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-12">
            <a href={props.value.github}>
              GitHub Repository: {props.value.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;
