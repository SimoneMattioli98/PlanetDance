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
    var divStyle = {};
    var planetStyle = {};
    if(this.props.name == "sun"){
      divStyle = {
        position:"relative",
        textAlign: "center",
        top:"30%"
      }
      planetStyle = {
        width: this.props.dimensions.width + "%",
        height: this.props.dimensions.height + "%",
        
      };
    }else{
      planetStyle = {
        width: this.props.dimensions.width + "%",
        height: this.props.dimensions.height + "%"
      };
    }
    return (
      <>
        <div style = {divStyle}>
          <img
            id={this.props.name}
            src={this.props.image}
            alt="Planet image"
            style={planetStyle}
          />
        </div>
      </>
    );
  }
}
