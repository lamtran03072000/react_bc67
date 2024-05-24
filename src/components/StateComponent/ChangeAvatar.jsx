import React, { Component } from 'react';

// b1 : Xây dựng giao diện hoàn chỉnh 100%
// b2 : mình phải đi xác nhận state là gì ? string, number , bolean ....
// b3 : mình phải binding state lên giao diện
// b4 : Xử lý sự kiện để thay đổi state => this.setState
export default class ChangeAvatar extends Component {
  state = {
    numberAvatar: 3,
    age: 18,
  };
  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={`https://i.pravatar.cc?u=${this.state.numberAvatar}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <button
              onClick={() => {
                let numberRandom = Math.floor(Math.random() * 100);

                this.setState({
                  numberAvatar: numberRandom,
                });
              }}
              className="btn btn-success"
            >
              Change avatar
            </button>

            <p>{this.state.age}</p>
            <button
              onClick={() => {
                this.setState({
                  age: 20,
                });
              }}
              className="btn btn-primary"
            >
              Plus age
            </button>
          </div>
        </div>
      </div>
    );
  }
}
