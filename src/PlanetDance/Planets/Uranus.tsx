import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
  fixSpeed: number;

}
export default class Uranus extends Component<Prop, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/uranus.png?raw=true";
  orbitDimension = this.props.resize ? 60 / 2 : 60;
  orbitDirection = "";
  orbitSpeed = 420.08 / this.props.fixSpeed;
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
