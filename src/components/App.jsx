import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Calculator from './calculator';

import Home from './home';

import Navbar from './navbar';

import Quote from './quotes';

import './App.css';

const App = () => (
  <div className="Math_setup">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </Router>
  </div>
);

export default App;
