import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterHolder from './Context/CounterHolder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterHolder>
      <App />
    </CounterHolder>
  </React.StrictMode>
);

