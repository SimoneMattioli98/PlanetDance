import AbstractPlanet from "./AbstractPlanet";

export default class Saturn extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/saturn.png?raw=true";

  orbitDimension = this.props.resize ? 45 / 2 : 45;
  orbitDirection = "";
  orbitSpeed = 147.23 / this.props.fixSpeed;
  planetDimension = 10;
  
}
