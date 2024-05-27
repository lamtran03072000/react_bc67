import React, { Component } from 'react';

export default class ListPhone extends Component {
  renderListPhone = () => {
    let { arrayIphone, handleAddProduct } = this.props;

    return arrayIphone.map((iphone) => {
      return (
        <div className="card col-4">
          <img src={iphone.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{iphone.tenSP}</h5>
            <button
              onClick={() => {
                handleAddProduct(iphone);
              }}
              className="btn btn-success"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderListPhone()}</div>;
  }
}
