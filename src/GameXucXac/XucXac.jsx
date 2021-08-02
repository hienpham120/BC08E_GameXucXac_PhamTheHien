import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderKetQua = () => {
    //Tính tổng điểm
    let tongDiem = this.props.mangXucXac.reduce((tong, xxnn, index) => {
      return (tong += xxnn.diem);
    }, 0);

    let ketQua = tongDiem > 11 ? "tài" : "xỉu";
    return `${tongDiem} - ${ketQua}`;
  };

  render() {
    //Props(redux)
    let { mangXucXac } = this.props;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                //Props từ redux cung cấp {this.props.dispatch}
                //Sử dụng dispatch để đưa dữ liệu người dùng chọn lên store
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 display-4">tài</div>
            </button>
          </div>
          <div className="col-6">
            <img
              src={mangXucXac[0].hinhAnh}
              alt={mangXucXac[0].hinhAnh}
              width={50}
            />
            <img
              src={mangXucXac[1].hinhAnh}
              alt={mangXucXac[1].hinhAnh}
              width={50}
            />
            <img
              src={mangXucXac[2].hinhAnh}
              alt={mangXucXac[2].hinhAnh}
              width={50}
            />
            <div className="diem display-4 mt-3">{this.renderKetQua()}</div>
          </div>
          <div className="col-3">
            <button
              className="btn bg-dark text-white"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                //Props từ redux cung cấp {this.props.dispatch}
                //Sử dụng dispatch để đưa dữ liệu người dùng chọn lên store
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 display-4">xỉu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Hàm này giúp lấy dữ liệu state từ redux về
const mapStateToProps = (rootReducer) => {
  //   console.log("xx", rootReducer.GameXucXacReducer);
  return {
    mangXucXac: rootReducer.GameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
