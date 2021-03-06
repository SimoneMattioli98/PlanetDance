import React, { Component } from "react";
import Orbit from "../Orbit";

export default class Sun extends Component<{}, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/sun.gif?raw=true";

    orbitDimension = 30;
  orbitDirection = "";
  orbitSpeed = 0;
  planetDimension = 20;
  render() {
    return (
      <Orbit
        orbitDimension={this.orbitDimension}
        orbitDirection={this.orbitDirection}
        orbitSpeed={this.orbitSpeed}
        planet={{
          planetDimension: this.planetDimension,
          planetName: "sun",
          planetImage: this.image,
        }}
      ></Orbit>
    );
  }
}
