import React, { Component } from "react";

interface L {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  h: number;
  w: number;
}

class Line {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  h: number;
  w: number;

  constructor(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    h: number,
    w: number
  ) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.h = h;
    this.w = w;
  }

  setCoords(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    h: number,
    w: number
  ) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.h = h;
    this.w = w;
  }
}

export default class Lines extends Component<{}, {}> {
  componentDidMount() {
    const canvasEle = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvasEle.getContext("2d") as CanvasRenderingContext2D;
    canvasEle.width = window.innerWidth;
    canvasEle.height = window.innerHeight;
    context.fillStyle = "rgba(0,0,0,0)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.beginPath();
    const main = document.querySelector("#primary");
    const sec = document.querySelector("#secondary");

    window.addEventListener("resize", function () {
      const newcontext = canvasEle.getContext("2d") as CanvasRenderingContext2D;
      canvasEle.width = window.innerWidth;
      canvasEle.height = window.innerHeight;
      newcontext.fillStyle = "rgba(0,0,0,0)";
      newcontext.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      newcontext.beginPath();
    });

    if (main && sec) {
      setTimeout(() => {
        setInterval(() => {
          var x1 =
              main.getBoundingClientRect().x +
              main.getBoundingClientRect().width / 2,
            x2 =
              sec.getBoundingClientRect().x +
              sec.getBoundingClientRect().width / 2,
            y1 =
              main.getBoundingClientRect().y +
              main.getBoundingClientRect().height / 2,
            y2 =
              sec.getBoundingClientRect().y +
              sec.getBoundingClientRect().height / 2,
            h = window.innerHeight,
            w = window.innerWidth;

          var line = new Line(
            x1 + window.scrollX,
            x2 + window.scrollX,
            y1 + window.scrollY,
            y2 + window.scrollY,
            h,
            w
          );
          context.moveTo(line.x1, line.y1);
          context.lineTo(line.x2, line.y2);
          context.strokeStyle = "white";
          context.lineWidth = 0.002;
          context.stroke();
        }, 60);
      }, 6000);
    }
  }

  render() {
    return (
      <>
        <canvas id="canvas"></canvas>
      </>
    );
  }
}
