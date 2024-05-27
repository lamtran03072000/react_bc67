import React, { Component } from 'react';

export default class PersonCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.personObject.avatar} alt="" />
        <div className="card-body">
          <p>{this.props.personObject.name}</p>
          <p>Tuổi</p>
        </div>
      </div>
    );
  }
}
