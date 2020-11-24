import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
  fixSpeed: number;
}

export default class Venus extends Component<Prop, {}> {
  image =
    "https://raw.githubusercontent.com/SimoneMattioli98/PlanetDance/master/src/PlanetDance/img/venus.svg";
  orbitDimension = this.props.resize ? 20 / 2 : 20;
  orbitDirection = "";
  orbitSpeed = 3.07 / this.props.fixSpeed;
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
