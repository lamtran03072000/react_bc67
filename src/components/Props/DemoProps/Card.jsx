import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    // this.props là thuộc tính có sẵn của react class coponent , Props sẽ được chứa dữ liệu tại nơi sử dụng coponent
    let { name, age, colorSkin, srcUrl } = this.props;
    return (
      <div className="card mx-2" style={{ width: '18rem' }}>
        <img src={srcUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <p>{age}</p>
          <p>{colorSkin}</p>
        </div>
      </div>
    );
  }
}
