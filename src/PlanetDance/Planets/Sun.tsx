import React from "react";
import { Component } from "react";
import "./Sun.css";

class Sun extends Component<{}, {}> {
  render() {
    return (
      <img
        alt = "Sun image"
        id="sun"
        src="https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/sun.gif?raw=true"
      />
    );
  }
}

export default Sun;
