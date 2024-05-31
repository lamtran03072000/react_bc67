import React, { Component } from 'react';

export default class ReactForm extends Component {
  state = {
    taiKhoan: '',
    matKhau: '',
    ngaySinh: '',
  };

  handleChangeInput = (e) => {
    let { name, value } = e.target;
    // dinamic key

    console.log('value: ', value);
    console.log('name: ', name);
  };

  render() {
    return (
      <form className="border p-5">
        <h3>Demo react form</h3>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Tài khoản
          </label>
          <input
            name="taiKhoan"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Mật khẩu
          </label>
          <input
            onChange={this.handleChangeInput}
            name="matKhau"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Ngày sinh
          </label>
          <input
            onChange={this.handleChangeInput}
            name="ngaySinh"
            type="text"
            className="form-control"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            console.log('thông tin', this.state);
          }}
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
    );
  }
}
