import React, { Component } from "react";
import Orbit from "../Orbit";

interface Prop {
  id: string;
  resize: boolean;
  fixSpeed: number;
}

export default abstract class AbstractPlanet extends Component<Prop, {}> {
  abstract image = "";

  abstract orbitDimension = 0;
  abstract orbitDirection = "";
  abstract orbitSpeed = 0;
  abstract planetDimension = 0;
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
