import React, { Component } from "react";
import Orbit from "../Orbit";
interface Prop {
  id: string;
  resize: boolean;
}
export default class Sun_prova extends Component<{}, {}> {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/sun.gif?raw=true";

  // orbitDimension = this.props.resize ? 700 / 2 : 700; //308
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
