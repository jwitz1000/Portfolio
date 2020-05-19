import React, { Component } from "react";
import Constants from "../../constants";
import armani from "./Arman_Riahi_Resume_2020 copy.pdf";

class SideBar extends Component {
  render() {
    return (
      <div className="bar">
        <ul className="icon-ul">
          <li className="icon-list">
            <span>
              <a href={armani}>
                <img
                  className="icon pop"
                  src={Constants.ICONS.EMAIL}
                  alt="icon"
                />
              </a>
            </span>
          </li>
          <li className="icon-list">
            <span>
              <a href={Constants.LINKS.LINKEDIN}>
                <img
                  className="icon pop"
                  src={Constants.ICONS.LINKEDIN}
                  alt="icon"
                />
              </a>
            </span>
          </li>
          <li className="icon-list">
            <span>
              <a href={Constants.LINKS.GITHUB}>
                <img
                  className="icon pop"
                  src={Constants.ICONS.GITHUB}
                  alt="icon"
                />
              </a>
            </span>
          </li>
          <li className="icon-list">
            <span>
              <a href={Constants.LINKS.RESUME}>
                <img
                  className="icon pop"
                  src={Constants.ICONS.RESUME}
                  alt="icon"
                />
              </a>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
