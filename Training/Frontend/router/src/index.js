import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Header from './Components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Fixed */}
      <Header />
      {/* ------- */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
