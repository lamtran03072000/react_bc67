import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';
import { Button } from './components/Button';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './components/databinding/DataBinding';
import StyleComponent from './components/StyleComponent/StyleComponent';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateCoponent from './components/StateComponent/StateCoponent';
import ChangeColor from './components/StateComponent/ChangeColor';
import ChangeAvatar from './components/StateComponent/ChangeAvatar';
import ChangeCar from './components/StateComponent/ChangeCar';
import RenderWithMap from './components/RenderWithMap/RenderWithMap';
import DemoProps from './components/Props/DemoProps/DemoProps';
import ProductList from './components/Props/ExRenderProduct/ProductList';
import ExXemChiTiet from './components/Props/ExXemChiTiet/ExXemChiTiet';
import ExPhoneCart from './components/Props/ExPhoneCart/ExPhoneCart';

// Cấu hình router dom => phân trang
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import HeaderPage from './components/HeaderPage/HeaderPage';
import HomeTemplate from './templates/HomeTemplate';
import AuthTemplate from './templates/AuthTemplate';
import Login from './page/Login';
import Register from './page/Register';
import Page404 from './page/Page404';
import ReactForm from './page/ReactForm/ReactForm';

// tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.getElementById('root'));

// jsx => class => className
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<div>Hello cyber soft</div>}></Route>
        <Route path="bt-gio-hang" element={<ExPhoneCart />}></Route>
        <Route path="ex-view-detail" element={<ExXemChiTiet />}></Route>

        <Route path="bt-demo-form" element={<ReactForm />}></Route>
      </Route>

      {/* Template auth */}
      <Route path="auth" element={<AuthTemplate />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>

      {/* Khi người dùng truy cập vào đường dẫn bất kì k thuộc các đường dẫn ở trên */}
      {/* <Route path="*" element={<Page404 />}></Route> */}
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  </BrowserRouter>,
);
