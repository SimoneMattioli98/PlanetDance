import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
}
export default class Neptune extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/neptune.png?raw=true";
  // orbitDimension = 700;
  orbitDimension = 30;
  orbitDirection = "";
  orbitSpeed = 823.9;
  planetDimension = 10;
  render() {
    return (
      <Orbit
        orbitDimension={this.orbitDimension}
        orbitDirection={this.orbitDirection}
        orbitSpeed={this.orbitSpeed}
        planet={{
          planetDimension: this.planetDimension,
          planetName: this.props.id,
          planetImage: this.image,
        }}
      ></Orbit>
    );
  }
}
