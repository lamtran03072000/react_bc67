import React, { Component } from 'react';

export default class ReactForm extends Component {
  state = {
    arrNguoiDung: [],
    valueForm: {
      taiKhoan: '',
      matKhau: '',
      ngaySinh: '',
    },
    errFormValue: {
      taiKhoan: '',
      matKhau: '',
      ngaySinh: '',
    },
  };

  handleChangeInput = (e) => {
    console.log('value : ', e.target.value, 'name : ', e.target.name);

    let dataType = e.target.getAttribute('data-type');
    let valueInput = e.target.value;
    let nameInput = e.target.name;

    let newValueForm = { ...this.state.valueForm };

    newValueForm = { ...newValueForm, [nameInput]: valueInput };

    /* Validattion */

    // taiKhoan ,  value : 123
    let messageErr = '';
    let newErrForm = { ...this.state.errFormValue };
    // Bắt lỗi không được để trống

    if (valueInput == '') {
      messageErr = 'Trường này không được để trống';
    } else {
      if (dataType == 'number') {
        // valueInput :  1234a => false => trường này chỉ chứa số

        let regexNumber = /^\d+$/;

        if (!regexNumber.test(valueInput)) {
          messageErr = 'Trường này chỉ chứa số';
        }
      } else if (dataType == 'string') {
      }
    }

    newErrForm = {
      ...newErrForm,
      [nameInput]: messageErr,
    };
    /*End validation */
    this.setState({
      valueForm: newValueForm,
    });

    this.setState({
      errFormValue: newErrForm,
    });
  };

  handleSubmit = () => {
    let valid = true;

    // Tất cả các giá trị  trên form đều phải có (đều có)
    for (let key in this.state.valueForm) {
      // "" === false
      if (!this.state.valueForm[key]) {
        valid = false;
      }
    }

    // Tất cả các giá trị trên form err đều không có (Đều rỗng)
    for (let key in this.state.errFormValue) {
      if (this.state.errFormValue[key]) {
        valid = false;
      }
    }

    if (!valid) {
      return;
    }

    let newArrNguoiDung = [...this.state.arrNguoiDung];

    newArrNguoiDung.push(this.state.valueForm);

    this.setState({
      arrNguoiDung: newArrNguoiDung,
    });
  };

  render() {
    return (
      <div>
        <form className="border p-5">
          <h3>Demo react form</h3>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Tài khoản
            </label>
            <input
              name="taiKhoan"
              type="text"
              data-type="number"
              id="taiKhoan"
              className="form-control"
              onChange={this.handleChangeInput}
            />
            <p className="text-danger">{this.state.errFormValue.taiKhoan}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Mật khẩu
            </label>
            <input
              onChange={this.handleChangeInput}
              name="matKhau"
              data-type="number"
              type="text"
              className="form-control"
            />
            <p className="text-danger">{this.state.errFormValue.matKhau}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Ngày sinh
            </label>
            <input
              data-type="string"
              onChange={this.handleChangeInput}
              name="ngaySinh"
              type="text"
              className="form-control"
            />
            <p className="text-danger">{this.state.errFormValue.ngaySinh}</p>
          </div>
          <button
            type="button"
            onClick={this.handleSubmit}
            className="btn btn-success"
          >
            Submit
          </button>
        </form>

        {/* danh sách người dùng */}
        <h3>Danh sách người dùng</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Tài khoản</td>
              <td>Mật khẩu</td>
              <td>Ngày sinh</td>
            </tr>
          </thead>
          <tbody>
            {this.state.arrNguoiDung.map((user, index) => {
              return (
                <tr>
                  <td>{user.taiKhoan}</td>
                  <td>{user.matKhau}</td>
                  <td>{user.ngaySinh}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
