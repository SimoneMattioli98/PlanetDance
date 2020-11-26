
import AbstractPlanet from "./AbstractPlanet";


export default class Venus extends AbstractPlanet {
  image =
    "https://raw.githubusercontent.com/SimoneMattioli98/PlanetDance/master/src/PlanetDance/img/venus.svg";
  orbitDimension = this.props.resize ? 20 / 2 : 20;
  orbitDirection = "";
  orbitSpeed = 3.07 / this.props.fixSpeed;
  planetDimension = 10;
}
