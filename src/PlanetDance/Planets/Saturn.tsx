import React, { Component } from "react";
import Orbit from "../Orbit";
interface Prop {
  id: string;
  resize: boolean;
}
export default class Saturn extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/main/src/PlanetDance/img/saturn.png?raw=true";

  orbitDimension = this.props.resize ? 700 / 2 : 700; //308
  orbitDirection = "";
  orbitSpeed = 147.23;
  planetDimension = 90;
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
