import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Assets/Logo_ML.png';
import './App.css';

import Results from './components/Result.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Results />
        
      </div>
    );
  }
}

export default App;
