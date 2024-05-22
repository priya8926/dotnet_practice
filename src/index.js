import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/CrudOperation/App';
import { BrowserRouter } from 'react-router-dom';
import App2 from './Authentication/App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    {/* <App/> */}
    <App2/>
  </React.StrictMode>
  </BrowserRouter>
);

