import React from 'react';
import ReactDOM from 'react-dom/client';
// createRoot and render methods are part of react-dom/client to intialise app on client side
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter> 
  </React.StrictMode>
//StrictMode helps to identify unsafe, legacy, or deprecated APIs/lifecycles. It's used for highlighting possible problems. Since it's a developer tool, it runs only in development mode. It renders every component inside the web app twice in order to identify and detect any problems in the app and show warning messages
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
