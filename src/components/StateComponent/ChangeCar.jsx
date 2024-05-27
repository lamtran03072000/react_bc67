import React, { Component } from 'react';

// b1: Đi xây giao diện
// b2 : Xác định state
// b3: Binding state lên giao diện
// b4 Xử lý sự kiên => this.setState
export default class ChangeCar extends Component {
  state = {
    imgUrl: './img/black-car.jpg',
  };

  //   Các hàm xử lý sự kiện thường có từ khoá : "handle" ở phía trước
  handleChangeCar = (url) => {
    this.setState({
      imgUrl: url,
    });
  };

  render() {
    return (
      <div className="container d-flex">
        <div className="w-50">
          <img width={'100%'} height={'400px'} src={this.state.imgUrl} alt="" />
        </div>
        <div className="w-50">
          <button
            onClick={() => {
              this.handleChangeCar('./img/black-car.jpg');
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeCar('./img/silver-car.jpg');
            }}
            className="btn btn-success"
          >
            Silver
          </button>
          <button
            onClick={() => {
              this.handleChangeCar('./img/red-car.jpg');
            }}
            className="btn btn-danger"
          >
            Red
          </button>
        </div>
      </div>
    );
  }
}
