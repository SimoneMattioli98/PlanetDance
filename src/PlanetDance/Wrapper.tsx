import React, { Component } from "react";
import PlanetDance from "./PlanetDance";
import "./Wrapper.css";
class Wrapper extends Component<{}, {}> {
  componentDidMount() {
    window.addEventListener("resize", function () {
      var wrapper = document.getElementById("wrapper") as HTMLElement;
      var universe = document.getElementById("universe") as HTMLElement;
      if (wrapper && universe) {
        if (window.innerHeight >= 1000 && window.innerWidth >= 1500) {
          wrapper.style.width = window.innerWidth + "px";
          wrapper.style.height = window.innerHeight + "px";
          universe.style.width = window.innerWidth + "px";
          universe.style.height = window.innerHeight + "px";
        }
      }
    });
  }

  render() {
    return (
      <div
        id="wrapper"
        style={{
          position: "relative",
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <div
          id="universe"
          style={{
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        >
          <div id="stars"></div>
          <PlanetDance />
        </div>
      </div>
    );
  }
}

export default Wrapper;
