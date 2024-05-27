import React, { Component } from 'react';
import ProductCard from './ProductCard';

const listProduct = [
  { name: 'adidas', img: 'https://picsum.photos/id/5/200/200' },
  { name: 'nike', img: 'https://picsum.photos/id/6/200/200' },
  { name: 'ananas', img: 'https://picsum.photos/id/7/200/200' },
  { name: 'bitis', img: 'https://picsum.photos/id/8/200/200' },
];

export default class ProductList extends Component {
  renderProductCard = () => {
    return listProduct.map((product) => {
      return <ProductCard product={product} />;
    });
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex">{this.renderProductCard()}</div>
      </div>
    );
  }
}
