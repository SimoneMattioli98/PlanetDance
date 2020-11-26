import AbstractPlanet from "./AbstractPlanet";


export default class Earth extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/earth.png?raw=true";
  orbitDimension = this.props.resize ? 40 / 2 : 40;
  orbitDirection = "";
  orbitSpeed = 5 / this.props.fixSpeed;
  planetDimension = 5;
}
