import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
  fixSpeed: number;
}

export default class Jupiter extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/jupiter.png?raw=true";

  orbitDimension = this.props.resize ? 45 / 2 : 45;
  orbitDirection = "";
  orbitSpeed = 59.3 / this.props.fixSpeed;
  planetDimension = 8;
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
