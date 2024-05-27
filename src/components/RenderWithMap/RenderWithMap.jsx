import React, { Component } from 'react';

const arrPhone = [
  {
    id: 1,
    name: 'iphone',
    price: 1000,
    img: 'https://picsum.photos/id/5/200/200',
  },
  {
    id: 2,
    name: 'Sam sung',
    price: 2000,
    img: 'https://picsum.photos/id/5/200/200',
  },
  {
    id: 3,
    name: 'nokia',
    price: 4000,
    img: 'https://picsum.photos/id/5/200/200',
  },
];

export default class RenderWithMap extends Component {
  renderLiNamePhone = () => {
    const content = [];
    for (let i = 0; i < arrPhone.length; i++) {
      // Mỗi lần duyệt qua mảng tạo ra 1 thẻ li (jsx)
      let contentLi = <li key={arrPhone[i].id}>{arrPhone[i].name}</li>;
      //   Sau mỗi lần tạo thì push li vừa tạo vào mảng content
      content.push(contentLi);
    }

    return content; //[<li>iphone</li>, <li>Sam Sung</li>, <li>nokia</li>]
  };

  renderLiWithMap = () => {
    return arrPhone.map((phone, i) => {
      return <li key={phone.id}>{phone.name}</li>; //[<li>iphone</li>, <li>Sam Sung</li>,]
    });
  };

  renderListTrPhone = () => {
    return arrPhone.map((phone) => {
      return (
        <tr key={phone.id}>
          <td>{phone.id}</td>
          <td>{phone.name}</td>
          <td>
            <img src={phone.img} alt="" width={50} height={50} />
          </td>
          <td>{phone.price}</td>
        </tr>
      );
    });
  };

  renderListCardPhone = () => {
    return arrPhone.map((phone, index) => {
      return (
        <div key={index} className="card mx-2" style={{ width: '18rem' }}>
          <img src={phone.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.name}</h5>

            <button className="btn btn-success">Buy</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        {/* <ul>{[<li key="1">Hôm nay là thứ 6</li>, <li key="2">Bc67</li>]}</ul> */}
        {/* <ul>{this.renderLiNamePhone()}</ul> */}
        <ul>{this.renderLiWithMap()}</ul>

        <table className="table">
          <thead>
            <tr>
              <td>Stt</td>
              <td>Tên Sản phẩm</td>
              <td>Hình ảnh</td>
              <td>Giá</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrPhone()}</tbody>
        </table>

        {/* render list card iphone */}
        <div className="d-flex">{this.renderListCardPhone()}</div>
      </div>
    );
  }
}

// function a() {
//   return [{}, {}];
// }
