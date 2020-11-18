import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./PlanetDance/Wrapper";

import BACKGROUND_MUSIC from "./PlanetDance/audio/3.mp3";
import { Howl } from "howler";

const audio = [{ sound: BACKGROUND_MUSIC, label: "LOL" }];

class App extends React.Component {
  soundPlay = (src: any) => {
    const sound = new Howl({
      src,
      loop: true,
    });

    sound.play();
  };
  componentDidMount() {
    this.renderBtn();
  }

  renderBtn = () => {
    return audio.map((soundobj, index) => {
      return this.soundPlay(soundobj.sound);
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <Wrapper />
        </div>
      </>
    );
  }
}

export default App;
