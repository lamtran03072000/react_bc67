import React, { Component } from 'react';

// b1 : Xây dựng giao diện hoàn chỉnh 100%
// b2 : mình phải đi xác nhận state là gì ? string, number , bolean ....
// b3 : mình phải binding state lên giao diện
// b4 : Xử lý sự kiện để thay đổi state => this.setState
export default class ChangeColor extends Component {
  state = {
    color: 'green',
  };

  render() {
    return (
      <div className="container">
        <i
          style={{
            fontSize: 40,
            color: this.state.color,
          }}
          className="fa-regular fa-truck-medical"
        />

        <br />
        <button
          onClick={() => {
            this.setState({
              color: 'green',
            });
          }}
          className="btn btn-success"
        >
          Xanh
        </button>
        <button
          onClick={() => {
            this.setState({
              color: 'blue',
            });
          }}
          className="btn btn-primary"
        >
          Xanh dương
        </button>
        <button
          onClick={() => {
            this.setState({
              color: 'red',
            });
          }}
          className="btn btn-danger"
        >
          Đỏ
        </button>
      </div>
    );
  }
}
