import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    let { banChon, soBanThang, soBanChoi } = this.props.GameXucXacReducer;
    return (
      <div className="container text-center ">
        <div className="display-4">
          bạn chọn:{" "}
          <span className="text-warning">{banChon ? "tài" : "xỉu"}</span>
        </div>
        <div className="display-4">
          số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </div>
        <div className="display-4">
          tổng số bàn chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            const action = {
              type: "PLAY_GAME",
            };
            this.props.dispatch(action);
          }}
        >
          <div className="display-5">thử cái chơi</div>
        </button>
        <button
          className="btn btn-success ml-2 mt-3"
          onClick={() => {
            const action = {
              type: "RESET_GAME",
            };
            this.props.dispatch(action);
          }}
        >
          <div className="display-5">làm lại cuộc đời</div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    GameXucXacReducer: rootReducer.GameXucXacReducer,
    // banChon: rootReducer.GameXucXac.banChon,
    // soBanThang: rootReducer.GameXucXac.soBanThang,
    // soBanChoi: rootReducer.GameXucXac.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
