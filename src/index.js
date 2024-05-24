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

// tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.getElementById('root'));

// jsx => class => className
root.render(
  <div>
    {/* <button className="btn btn-success">Click me</button> */}
    {/* <Card> </Card> */}
    {/* <Card />

    <Button /> */}
    {/* <HomeLayout /> */}

    {/* <DataBinding /> */}

    {/* <StyleComponent /> */}

    {/* <HandleEvent /> */}

    {/* <StateCoponent /> */}

    {/* <ChangeColor /> */}

    <ChangeAvatar />
  </div>,
);
