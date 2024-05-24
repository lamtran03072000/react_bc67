// react class component
// rcc

import React, { Component } from 'react';

export default class DataBinding extends Component {
  title = 'hello bc67';
  person = {
    name: 'lâm',
    age: 25,
    avatar: 'https://i.pravatar.cc?u=2',
  };
  renderContent = () => {
    //
    return <p className="text-danger h3">hello các bạn </p>; //string , number , null , bolean hoặc jsx
  };
  render() {
    return (
      <div>
        <p id="txt"> {this.title} </p>

        <div className="card" style={{ width: '18rem' }}>
          <img src={this.person.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {this.person.name} </h5>
            <p className="card-text">{this.person.age}</p>
          </div>
        </div>

        <p> {this.renderContent()} </p>
      </div>
    );
  }
}
