import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Platforms from './Pages/Platforms/index';
// import App from './App';
import Platforms from './Pages/Platforms/NewIndex';
import reportWebVitals from './reportWebVitals';
import './Styles/fontFace.scss'
import './Styles/fonts.scss'

ReactDOM.render(
  <React.StrictMode>
    <Platforms/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
