import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game';

const root = ReactDOM.createRoot(
  // document.getElementById('root') as HTMLElement
  document.querySelector('body') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Game initialLevel={0} onFinish={()=>console.log('the end')}/>
  </React.StrictMode>
);
