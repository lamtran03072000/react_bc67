import React, { Component } from 'react';

export default class HandleEvent extends Component {
  handleClick = () => {
    console.log('click');
  };

  sayHello = (name, age) => {
    console.log('Xin chào', name, age);
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick} className="btn btn-success">
          Click me
        </button>

        <button
          onClick={(e) => {
            console.log('nhấn');
          }}
          className="btn btn-primary"
        >
          Nhấn tôi
        </button>

        <button
          onClick={() => {
            this.sayHello('lâm', 25);
          }}
          className="btn btn-danger"
        >
          Say hello
        </button>

        <input
          type="text"
          onChange={(e) => {
            console.log('Gõ');
          }}
        />
      </div>
    );
  }
}
