
import AbstractPlanet from "./AbstractPlanet";


export default class Jupiter extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/jupiter.png?raw=true";

  orbitDimension = this.props.resize ? 45 / 2 : 45;
  orbitDirection = "";
  orbitSpeed = 59.3 / this.props.fixSpeed;
  planetDimension = 8;
 
}
