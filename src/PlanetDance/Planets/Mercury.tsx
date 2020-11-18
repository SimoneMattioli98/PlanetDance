import React, { Component } from "react";
import Orbit from "../Orbit";
interface Prop {
  id: string;
  resize: boolean;
}
export default class Mercury extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/main/src/PlanetDance/img/mercury.png?raw=true";
  orbitDimension = this.props.resize ? 150 / 2 : 150;
  orbitDirection = "";
  orbitSpeed = 1.2;
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
