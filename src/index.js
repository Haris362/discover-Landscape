import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar/navBar'
import China from './section_1/index'
import Pakistan from './section_2/index'
import Italy from './section_3/index'
import India from './section_4/index'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <China/>
    <Pakistan/>
    <Italy/>
    <India/>
  </React.StrictMode>
);
reportWebVitals();
