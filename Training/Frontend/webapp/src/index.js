import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={
          <>
            <h2 className='text-center'>404</h2>
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
