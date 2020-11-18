import React, { Component } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Lines from "./Lines";
import Earth from "./Planets/Earth";
import Mercury from "./Planets/Mercury";
import Neptune from "./Planets/Neptune";
import Sun from "./Planets/Sun";
import Mars from "./Planets/Mars";
import Uranus from "./Planets/Uranus";
import Venus from "./Planets/Venus";
import Jupiter from "./Planets/Jupiter";
import Saturn from "./Planets/Saturn";

import "./Menu.css";
interface State {
  primary: number;
  secondary: number;
}

const map: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

class Menu extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      primary: 0,
      secondary: 0,
    };
  }

  getPrimaryPlanet = (value: number, id: string) => {
    switch (value) {
      case 2:
        return <Venus id={id} resize={false} />;
      case 3:
        return <Earth id={id} resize={false} />;
      case 4:
        return <Mars id={id} resize={false} />;
      case 5:
        return <Jupiter id={id} resize={false} />;
      case 6:
        return <Saturn id={id} resize={false} />;
      case 7:
        return <Uranus id={id} resize={false} />;
      case 8:
        return <Neptune id={id} />;

      default:
        break;
    }
  };

  getPlanet = (value: number, id: string) => {
    var resize = this.state.primary > value;
    switch (value) {
      case 1:
        return <Mercury id={id} resize={resize} />;
      case 2:
        return <Venus id={id} resize={resize} />;
      case 3:
        return <Earth id={id} resize={resize} />;
      case 4:
        return <Mars id={id} resize={resize} />;
      case 5:
        return <Jupiter id={id} resize={resize} />;
      case 6:
        return <Saturn id={id} resize={resize} />;
      case 7:
        return <Uranus id={id} resize={resize} />;
      case 8:
        return <Neptune id={id} />;

      default:
        break;
    }
  };

  reset = () => {
    this.setState({
      primary: 0,
      secondary: 0,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", function () {
      var container = document.getElementById("menu_container") as HTMLElement;
      if (container) {
        if (window.innerHeight >= 1000 && window.innerWidth >= 1500) {
          container.style.width = window.innerWidth + "px";
          container.style.height = window.innerHeight + "px";
        }
      }
    });
  }

  select = (e: EventTarget & HTMLInputElement) => {
    var value = Number(e.value);
    if (e.checked) {
      if (!this.state.primary) {
        this.setState({
          primary: value,
        });
      } else if (value > this.state.primary) {
        this.setState({
          secondary: this.state.primary,
          primary: value,
        });
      } else {
        this.setState({
          secondary: value,
        });
      }
    } else {
      this.setState({
        primary: 0,
      });
    }
  };

  render() {
    if (this.state.primary && this.state.secondary) {
      return (
        <>
          <Button className="reset btn" onClick={this.reset} variant="primary">
            Reset
          </Button>
          <Sun />
          {this.getPlanet(this.state.primary, "primary")}
          {this.getPlanet(this.state.secondary, "secondary")}
          <Lines />
        </>
      );
    }
    return (
      <div
        id="menu_container"
        style={{
          position: "absolute",
          width: window.innerWidth,
          height: window.innerHeight,
          textAlign: "center",
        }}
      >
        <div className="title_container">
          <img
            className="title"
            src="https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/planet_dance_title.png?raw=true"
            alt="title"
          />
        </div>
        <ToggleButtonGroup className="menu" type="checkbox" name="options">
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={1}
          >
            Mercury
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={2}
          >
            Venus
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={3}
          >
            Earth
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={4}
          >
            Mars
          </ToggleButton>

          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={5}
          >
            Jupiter
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={6}
          >
            Saturn
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={7}
          >
            Uranus
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget);
            }}
            value={8}
          >
            Neptune
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}

export default Menu;
