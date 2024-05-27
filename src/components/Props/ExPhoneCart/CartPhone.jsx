import React, { Component } from 'react';

export default class CartPhone extends Component {
  renderRowIphone = () => {
    let { dataCart, handleRemoveIphone, handleChangeQuantity } = this.props;
    return dataCart.map((sp) => {
      return (
        <tr>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={50} height={50} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(sp.maSP, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="mx-2">{sp.soLuong}</span>
            <button
              onClick={() => {
                handleChangeQuantity(sp.maSP, 1);
              }}
              className="btn btn-danger"
            >
              +
            </button>
          </td>
          <td>{sp.giaBan}</td>
          <td></td>
          <td>
            <button
              onClick={() => {
                handleRemoveIphone(sp.maSP);
              }}
              className="btn btn-primary"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="my-5">
        <h5>Giỏ hàng</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng tiền</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderRowIphone()}</tbody>
        </table>
      </div>
    );
  }
}
