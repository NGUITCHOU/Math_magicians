import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Calculator from './calculator';
import Home from './home';
import Navbar from './navbar';
import Quote from './quotes';
import './App.css';

 const App = ()=> {
  return  (
    <div className="math-setup">
      <Router>
        <div>

        <Navbar/>
        </div>
        <Routes> 
          <Route path='/' exact element={<Home/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/quotes' element={<Quote/>}/>
        </Routes>
      </Router>
    
    </div>
   
  )
}

export default App;
