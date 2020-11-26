import React, { Component } from "react";
import Orbit from "../Orbit";
import AbstractPlanet from "./AbstractPlanet";


export default class Neptune extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/neptune.png?raw=true";
  orbitDimension = 45;
  orbitDirection = "";
  orbitSpeed = 823.9 / this.props.fixSpeed;
  planetDimension = 10;
  
}
