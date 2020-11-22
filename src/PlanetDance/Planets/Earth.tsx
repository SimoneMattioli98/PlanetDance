import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
}

export default class Earth extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/earth.png?raw=true";
  // orbitDimension = this.props.resize ? 500 / 2 : 500;
  orbitDimension = 30;
  orbitDirection = "";
  orbitSpeed = 5;
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
