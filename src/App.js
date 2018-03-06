import React, { Component } from 'react';
import Navbar from './navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main'; // not used just to test routes
import Edit from './edit'; // not used just to test routes
import Show from './show';  
import Categories from './categories';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex border border-secondary">
          <Categories />
          <Show />
        </div>
      </div>
      );
  }
}

export default App;


// router example
        {/* <BrowserRouter>
          <Route path="/" component={Main} />
          <Route path="/" component={Edit} />
        </BrowserRouter> */}