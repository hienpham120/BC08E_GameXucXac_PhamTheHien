//Liệt kê các state của ứng dụng bài tập game
const stateDefault = {
  soBanChoi: 0,
  soBanThang: 0,
  banChon: true,
  mangXucXac: [
    { hinhAnh: "./img/2.png", diem: 2 },
    { hinhAnh: "./img/1.png", diem: 1 },
    { hinhAnh: "./img/1.png", diem: 1 },
  ],
};

export const GameXucXacReducer = (state = stateDefault, action) => {
  console.log("action", action);
  switch (action.type) {
    case "DAT_CUOC":
      {
        state.banChon = action.banChon;
        return { ...state };
      }
      break;
    case "PLAY_GAME":
      {
        //Tạo ra xúc xắc ngẫu nhiên từ số random
        let mangXucXacNgauNhien = [];
        for (let i = 0; i < 3; i++) {
          //Mỗi lần sẽ tạo ra 1 số ngẫu nhiên
          let soNgauNhien = Math.floor(Math.random() * 6) + 1;
          //Từ số ngẫu nhiên tạo ra 1 obj xúc xắc ngẫu nhiên
          let xxnn = { hinhAnh: `./img/${soNgauNhien}.png`, diem: soNgauNhien };
          //Thêm vào mảng xúc xắc ngẫu nhiên
          mangXucXacNgauNhien.push(xxnn);
        }
        //setState cho mangXucXac = mangXucXacNgauNhien
        state.mangXucXac = mangXucXacNgauNhien;
        //Xử lý thắng
        let tongDiem = mangXucXacNgauNhien.reduce((tong, xxnn, index) => {
          return (tong += xxnn.diem);
        }, 0);
        if (
          (state.banChon && tongDiem > 11) ||
          (!state.banChon && tongDiem <= 11)
        ) {
          state.soBanThang += 1;
        }
        state.soBanChoi += 1;
        return { ...state };
      }
      break;

    case "RESET_GAME": {
      state.mangXucXac = [
        { hinhAnh: "./img/1.png", diem: 1 },
        { hinhAnh: "./img/1.png", diem: 1 },
        { hinhAnh: "./img/1.png", diem: 1 },
      ];
      state.soBanChoi = 0;
      state.soBanThang = 0;
      state.ban = true;
      return { ...state };
    }
    default:
      return state;
  }
};
