import React, { Component } from 'react';
import Card from './Card';
import ProductProp from './ProductProp';
import PersonCard from './PersonCard';

export default class DemoProps extends Component {
  render() {
    let person = {
      name: 'Dung',
      age: 25,
      avatar: 'https://i.pravatar.cc?u=10',
    };

    return (
      <div className="container ">
        <div className="d-flex">
          <div className="w-25">
            <Card
              name="Lâm"
              age={20}
              colorSkin="black"
              srcUrl="https://i.pravatar.cc?u=10"
            />
          </div>
          <div className="w-25">
            <Card name="Dung" age={25} srcUrl="https://i.pravatar.cc?u=11" />
          </div>
          <div className="w-25">
            <Card name="Hiếua" age={30} srcUrl="https://i.pravatar.cc?u=12" />
          </div>
        </div>

        <ProductProp tenSp="iphone" price={4000} />
        <ProductProp tenSp="samsung" price={5000} />

        <PersonCard personObject={person} />
      </div>
    );
  }
}
