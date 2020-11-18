import React, { Component } from "react";
import "./Orbit.css";
import Planet from "./Planet";

export interface OrbitProps {
  orbitDimension: number;
  orbitSpeed: number;
  orbitDirection: string;
  planet: {
    planetName: string;
    planetDimension: number;
    planetImage: string;
  };
}

export default class Orbit extends Component<OrbitProps, {}> {
  render() {
    const orbitStyle = {
      width: this.props.orbitDimension,
      height: this.props.orbitDimension,
      margin:
        "-" +
        this.props.orbitDimension / 2 +
        "px 0px 0px -" +
        this.props.orbitDimension / 2 +
        "px",
      animation:
        "orbit " +
        this.props.orbitSpeed +
        "s linear " +
        this.props.orbitDirection +
        " infinite",
    };
    const planetDimension = {
      width: this.props.planet.planetDimension,
      height: this.props.planet.planetDimension,
    };
    return (
      <div className="orbit" style={orbitStyle}>
        <Planet
          dimensions={planetDimension}
          image={this.props.planet.planetImage}
          name={this.props.planet.planetName}
        />
      </div>
    );
  }
}
