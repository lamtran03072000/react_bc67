import React, { Component } from 'react';
import CardIphone from './CardIphone';

const arrayIphone = [
  {
    maSP: 1,
    tenSP: 'VinSmart Live',
    manHinh: 'AMOLED, 6.2, Full HD+',
    heDieuHanh: 'Android 9.0 (Pie)',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 5700000,
    hinhAnh: './img/vsphone.jpg',
  },
  {
    maSP: 2,
    tenSP: 'Meizu 16Xs',
    manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
    heDieuHanh: 'Android 9.0 (Pie); Flyme',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 7600000,
    hinhAnh: './img/meizuphone.jpg',
  },
  {
    maSP: 3,
    tenSP: 'Iphone XS Max',
    manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
    heDieuHanh: 'iOS 12',
    cameraSau: 'Chính 12 MP & Phụ 12 MP',
    cameraTruoc: '7 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 27000000,
    hinhAnh: './img/applephone.jpg',
  },
];

export default class ExXemChiTiet extends Component {
  state = {
    phoneDetail: {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },
  };

  handleXemChiTietSp = (phoneClick) => {
    this.setState({
      phoneDetail: phoneClick,
    });
  };

  renderListIphone = () => {
    return arrayIphone.map((iphone) => {
      return (
        <CardIphone
          key={iphone.maSP}
          iphone={iphone}
          handleXemChiTietSp={this.handleXemChiTietSp}
        />
      );
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.phoneDetail;
    return (
      <div className="container">
        {/* Danh sách sản phẩm */}
        <div className="row">{this.renderListIphone()}</div>
        {/* Xem chi tiết  */}

        <div className="row my-5">
          <div className="col-3">
            <h5>{tenSP}</h5>
            <img src={hinhAnh} alt="" height={300} />
          </div>
          <div className="col-9">
            <h5>Thông tin sản phẩm</h5>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Cam Trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Cam Sau</td>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
