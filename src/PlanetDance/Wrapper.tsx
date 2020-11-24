import React, { Component } from "react";
import PlanetDance from "./PlanetDance";
import "./Wrapper.css";
class Wrapper extends Component<{}, {}> {
  componentDidMount() {
    window.addEventListener("resize", function () {
      var universe = document.getElementById("universe") as HTMLElement;
      if (universe) {
        universe.style.width = "100%";
        universe.style.height = "100%";
      }
      
    });
  }

  render() {
    return (
      <div
        id="universe"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}id="stars"></div>
        <PlanetDance />
      
      </div>
    );
  }
}

export default Wrapper;
