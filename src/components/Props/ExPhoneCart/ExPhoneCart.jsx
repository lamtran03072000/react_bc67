import React, { Component } from 'react';
import ListPhone from './ListPhone';
import CartPhone from './CartPhone';

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
// 1 string, 2 object , 3 array , 4 bolean , 5 number
export default class ExPhoneCart extends Component {
  state = {
    arrCartPhone: [
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
        soLuong: 3,
      },
    ],
  };

  handleAddProduct = (phoneClick) => {
    // ĐI clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    let findIphone = arrCartNow.find(
      (iphone) => iphone.maSP === phoneClick.maSP,
    );

    // Check xem iphone click đã tồn tại trong giỏ hàng chưa

    if (findIphone) {
      // Nếu có rồi thì tăng số lượng sản phẩm đó lên 1
      findIphone.soLuong += 1;
    } else {
      // Nếu chưa có thì thêm key số lượng là 1  sau đó thêm sản phẩm đó vào giỏ hàng hiện tại
      let iphoneCart = { ...phoneClick, soLuong: 1 };
      arrCartNow.push(iphoneCart);
    }

    // Đi setstate lại giỏ hàng mới nhất
    this.setState({
      arrCartPhone: arrCartNow,
    });
  };

  //   cần id
  handleRemoveIphone = (id) => {
    // ĐI clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    // Cách 1 : dùng hàm find Index
    // let index = arrCartNow.findIndex((iphone) => iphone.maSP === id);

    // = -1 thì nó k tồn tại trong giỏ hàng

    // if (index !== -1) {
    //   arrCartNow.splice(index, 1);
    // }

    // Cách 2 xoá dựa vào hàm Fillter
    arrCartNow = arrCartNow.filter((phone) => phone.maSP !== id);

    this.setState({
      arrCartPhone: arrCartNow,
    });
  };

  handleChangeQuantity = (maSpClick, soLuong) => {
    // maSpClick:  1 , soLuong : -1

    // ĐI clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrCartPhone];

    //   Tìm sản phẩm click change số lượng

    let phoneClick = arrCartNow.find((phone) => phone.maSP === maSpClick);

    if (phoneClick) {
      phoneClick.soLuong += soLuong;

      //   Xử lý khi số lượng giảm đến 0 (<1) thì sẽ đi xoá sản phẩm đó khỏi giỏ hàng
      if (phoneClick.soLuong < 1) {
        this.handleRemoveIphone(maSpClick);
        return;
      }
    }

    this.setState({
      arrCartPhone: arrCartNow,
    });
  };

  render() {
    return (
      <div className="container">
        <ListPhone
          arrayIphone={arrayIphone}
          handleAddProduct={this.handleAddProduct}
        />
        <CartPhone
          handleChangeQuantity={this.handleChangeQuantity}
          handleRemoveIphone={this.handleRemoveIphone}
          dataCart={this.state.arrCartPhone}
        />
      </div>
    );
  }
}
