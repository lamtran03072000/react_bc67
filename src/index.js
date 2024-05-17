import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';
import { Button } from './components/Button';
import HomeLayout from './components/HomeLayout/HomeLayout';

// tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.getElementById('root'));

// jsx => class => className
root.render(
  <div>
    {/* <button className="btn btn-success">Click me</button> */}

    {/* <Card> </Card> */}

    {/* <Card />

    <Button /> */}

    <HomeLayout />
  </div>,
);
