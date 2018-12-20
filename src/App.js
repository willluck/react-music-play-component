import React, { Component } from "react";
import AudioPlay from "./components/AudioPlay";
import "./App.css";

class App extends Component {
  render() {
    const musicList = [
      {
        id: "1",
        title: "打上花火",
        info: "DAOKO,米津玄師",
        resource: require("./resource/DAOKO,米津玄師 - 打上花火.mp3"),
        time: "04:50",
        img:
          "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
      },
      {
        id: "2",
        title: "渡月橋 ~君 想ふ~",
        info: "倉木麻衣",
        resource: require("./resource/倉木麻衣 - 渡月橋 ~君 想ふ~.mp3"),
        time: "04:50",
        img:
          "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
      },
      {
        id: "3",
        title: "美丽的神话Ⅰ",
        info: "成龙,金喜善",
        resource: require("./resource/成龙,金喜善 - 美丽的神话Ⅰ.mp3"),
        time: "04:50",
        img:
          "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
      }
    ];
    return (
      <div>
        <div className="App-Content">
          <AudioPlay musicList={musicList} />
        </div>
      </div>
    );
  }
}

export default App;
