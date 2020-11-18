import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
}

export default class Venus extends Component<Prop, {}> {
  image =
    "https://raw.githubusercontent.com/SimoneMattioli98/PlanetDance/master/src/PlanetDance/img/venus.svg";
  orbitDimension = this.props.resize ? 350 / 2 : 350;
  orbitDirection = "";
  orbitSpeed = 3.07;
  planetDimension = 20;
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
