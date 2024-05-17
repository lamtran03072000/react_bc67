//  react class component

import React, { Component } from 'react';
import Header from './Header';
import ContentRed from './ContentRed';
import ContentBlue from './ContentBlue';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="d-flex">
          <ContentRed />
          <ContentBlue />
        </div>
      </div>
    );
  }
}

// Nộp bằng link git

// mỗi một bài => tạo 1 cái project react mới  chứa nội dung bài tập đó

// tạo folder tên : baitap_1

// mở terminal => "npx create-react-app . "
