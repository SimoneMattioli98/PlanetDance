import AbstractPlanet from "./AbstractPlanet";

export default class Uranus extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/uranus.png?raw=true";
  orbitDimension = this.props.resize ? 45 / 2 : 45;
  orbitDirection = "";
  orbitSpeed = 420.08 / this.props.fixSpeed;
  planetDimension = 10;
  
}
