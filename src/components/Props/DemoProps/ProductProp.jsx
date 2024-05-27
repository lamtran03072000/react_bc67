import React, { Component } from 'react';

export default class ProductProp extends Component {
  render() {
    return (
      <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <p>{this.props.tenSp}</p>
          <p>{this.props.price}</p>
        </div>
      </div>
    );
  }
}
