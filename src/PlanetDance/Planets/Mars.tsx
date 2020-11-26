
import AbstractPlanet from "./AbstractPlanet";



export default class Mars extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/mars.png?raw=true";
  orbitDimension = this.props.resize ? 45 / 2 : 45;
  orbitDirection = "";
  orbitSpeed = 9.4 / this.props.fixSpeed;
  planetDimension = 5;

}
