import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    let { product } = this.props;

    return (
      <div className="card w-25">
        <img src={product.img} alt="" height={200} />

        <div className="card-body">
          <p>{product.name}</p>
        </div>
      </div>
    );
  }
}
