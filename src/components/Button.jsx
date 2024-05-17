// react class component

import React, { Component } from 'react';

export class Button extends Component {
  // render là phương thức của react trả về giao diện của component
  render() {
    return <button className="btn btn-danger">Click tôi</button>;
  }
}
