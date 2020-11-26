import AbstractPlanet from "./AbstractPlanet";

export default class Mercury extends AbstractPlanet {
  image =
    "https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/mercury.png?raw=true";
  orbitDimension = 10 ;
  orbitDirection = "";
  orbitSpeed = 1.2 / this.props.fixSpeed;
  planetDimension = 10;
  
}
