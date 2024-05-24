import React, { Component } from 'react';

// import dạng thường thì sẽ ảnh hưởng đến tất cả các file trong project
// import dạng module thì chỉ tác động đến component được import và sử dụng
import style from './styleComponent.module.css';
export default class StyleComponent extends Component {
  render() {
    return (
      <div>
        {/* css module */}
        <p className={`${style['text-cyber']}`}>Nay mưa to quá</p>

        <p className={`${style['bg-cyber']}`}>hello mọi người </p>

        {/* // inline  */}
        <div
          style={{
            fontSize: '40px',
            background: 'red',
            color: 'white',
          }}
        >
          Mọi người ăn cơm chưa
        </div>
      </div>
    );
  }
}
