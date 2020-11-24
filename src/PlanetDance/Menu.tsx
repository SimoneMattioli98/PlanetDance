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
  speed: number;
}


class Menu extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      primary: 0,
      secondary: 0,
      speed: 1
    };
  }

  getPlanet = (value: number, id: string) => {
    var resize = this.state.primary > value;
    switch (value) {
      case 1:
        return <Mercury id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 2:
        return <Venus id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 3:
        return <Earth id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 4:
        return <Mars id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 5:
        return <Jupiter id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 6:
        return <Saturn id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 7:
        return <Uranus id={id} resize={resize} fixSpeed={this.state.speed}/>;
      case 8:
        return <Neptune id={id} fixSpeed={this.state.speed}/>;

      default:
        break;
    }
  };

  reset = () => {
    this.setState({
      primary: 0,
      secondary: 0,
      speed: 1
    });
  };

  

  select = (e: EventTarget & HTMLInputElement, speedUp: number) => {
    var value = Number(e.value);
    if (e.checked) {
      if (!this.state.primary) {
        this.setState({
          primary: value,
          speed: speedUp
        });
      } else if (value > this.state.primary) {
        this.setState({
          secondary: this.state.primary,
          primary: value,
          speed: speedUp
        });
      } else {
        this.setState({
          secondary: value,
        });
      }
    } else {
      this.reset();
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
        className="menu_wrapper"
      >
        <div className="title_container">
          <img
            className="title"
            src="https://github.com/SimoneMattioli98/PlanetDance/blob/master/src/PlanetDance/img/planet_dance_title.png?raw=true"
            alt="title"
            
          />
        </div>
        <div className="btn-container">
        <ToggleButtonGroup className="group" type="checkbox" name="options">
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 1);
            }}
            value={1}
          >
            Mercury
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 1);
            }}
            value={2}
          >
            Venus
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 1);
            }}
            value={3}
          >
            Earth
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 1);
            }}
            value={4}
          >
            Mars
          </ToggleButton>

          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 8);
            }}
            value={5}
          >
            Jupiter
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 8);
            }}
            value={6}
          >
            Saturn
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 16);
            }}
            value={7}
          >
            Uranus
          </ToggleButton>
          <ToggleButton
            className="btn"
            onChange={(e) => {
              this.select(e.currentTarget, 16);
            }}
            value={8}
          >
            Neptune
          </ToggleButton>
        </ToggleButtonGroup>
        </div>
      </div>
    );
  }
}

export default Menu;
