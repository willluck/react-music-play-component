import React, { Component } from "react";
import AudioPlay from "./components/AudioPlay";
import "./App.css";

/**
 * 注意，下面被注释掉的类似// resource: require("./resource/DAOKO,米津玄師 - 打上花火.mp3"),
 * 因为暂时没有搞定第三方api，所以直接在项目文件中放了mp4文件，但是后有开发者朋友反馈，会导致下载速度变慢很多，导致无法拉取项目，
 * 所以这里把resource注释，请拉取项目的开发者自行加入api或者是音乐文件地址
 *
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        {
          id: "1",
          title: "打上花火",
          info: "DAOKO,米津玄師",
          // resource: require("./resource/DAOKO,米津玄師 - 打上花火.mp3"),
          resource: "",
          time: "04:50",
          img:
            "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
        },
        {
          id: "2",
          title: "渡月橋 ~君 想ふ~",
          info: "倉木麻衣",
          // resource: require("./resource/倉木麻衣 - 渡月橋 ~君 想ふ~.mp3"),
          resource: "",
          time: "04:50",
          img:
            "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
        },
        {
          id: "3",
          title: "美丽的神话Ⅰ",
          info: "成龙,金喜善",
          // resource: require("./resource/成龙,金喜善 - 美丽的神话Ⅰ.mp3"),
          resource: "",
          time: "04:50",
          img:
            "http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg"
        }
      ]
    };
  }
  // 删除指定音乐
  onDeleteMusic = id => {
    const { musicList } = this.state;
    const newMusicList = [];
    musicList.forEach(item => {
      if (item.id !== id) {
        newMusicList.push(item);
      }
    });
    this.setState({ musicList: newMusicList });
  };
  // 删除全部音乐
  onDeleteAllMusic = () => {
    this.setState({ musicList: [] });
  };

  render() {
    const { musicList } = this.state;
    return (
      <div>
        <div className="App-Content">
          <div className="explain-header">
            <p className="explain-title">
              基于React的音乐播放器1.0【仿网易云音乐Web端音乐播放器】
            </p>
            <p>
              ps.由于api原因，内置音乐暂时采用了静态资源的办法（谁让我只是个播放器呢），另外也没法做歌词滚动播放，还有很多业务性质的按钮点了也是没用的啦，
              <br />
              <p style={{ fontWeight: "bold" }}>
                另外，由于是静态资源，浏览器缓存需要等待几秒才会播放出音乐，这个在用api替换后，也是不会出现的啦
              </p>
              <br />
              特别说明：我已经找好了一个开源音乐api了，后面抽空实践，我会把静态资源给改成api获取的，另外歌词播放滚动也会做的，
              第三方api都有的，如果你觉得项目还不错，可以给我的GitHub点个赞那
              <a href="https://github.com/willluck/react-music-play-component">
                点这里
              </a>
            </p>
          </div>
          <AudioPlay
            musicList={musicList}
            onDeleteMusic={this.onDeleteMusic}
            onDeleteAllMusic={this.onDeleteAllMusic}
          />
        </div>
      </div>
    );
  }
}

export default App;
