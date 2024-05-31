import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class AuthTemplate extends Component {
  render() {
    return (
      <div
        className="d-flex"
        style={{
          height: '100vh',
        }}
      >
        <div className="w-50">
          <img
            src="https://st2.depositphotos.com/1002277/5515/i/450/depositphotos_55150353-stock-photo-admin-cubics.jpg"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-50 h-100 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    );
  }
}
