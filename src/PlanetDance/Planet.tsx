import React, { Component } from "react";
import "./Planet.css";

interface PlanetProps {
  name: string;
  image: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export default class Planet extends Component<PlanetProps, {}> {
  constructor(props: PlanetProps) {
    super(props);
  }

  render() {
    var topStyle = {};
    var middleStyle = {};
    var planetStyle = {};
    if(this.props.name == "sun"){
      middleStyle = {
        display: "table-cell",
        "vertical-align": "middle"
      }
      topStyle = {
        display: "table",
        position: "absolute",
        textAlign: "center",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      }
      planetStyle = {
        width: "25%",
        height: "auto",
      };
    }else{
      planetStyle = {
        width: this.props.dimensions.width + "%",
        height: this.props.dimensions.height + "%",
        "margin-left": "auto",
        "margin-right": "auto"
      };
    }
    return (
      <>
        <div style = {topStyle}>
        <div style = {middleStyle}>
          <img
            id={this.props.name}
            src={this.props.image}
            alt="Planet image"
            style={planetStyle}
          />
        </div>
        </div>
      </>
    );
  }
}
