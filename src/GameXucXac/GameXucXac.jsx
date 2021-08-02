import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "../assets/style/BaiTapGameXucXac.css"; //Ảnh hưởng toàn bộ ứng dụng kể cả app.js

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="bg-game">
        <h3
          style={{ fontWeight: 700 }}
          className="text-center display-4 text-white"
        >
          game xúc xắc
        </h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
