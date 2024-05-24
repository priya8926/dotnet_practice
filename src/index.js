import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/CrudOperation/App';
import { BrowserRouter } from 'react-router-dom';
import App3 from './Authentication/App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    {/* <App/> */}
    {/* <App2/> */}
    <App3/>
  </React.StrictMode>
  </BrowserRouter>
);

