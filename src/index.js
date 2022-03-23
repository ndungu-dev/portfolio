import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {FaBeer} from'react-icons/fa'
import App from './App'
ReactDOM.render(
  <BrowserRouter>
  <App />
  <FaBeer />
  </BrowserRouter>
  ,
  document.getElementById('root')
);