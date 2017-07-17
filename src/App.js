import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Assets/Logo_ML.png';
import ic_Search from './Assets/ic_Search.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-light bg-ml mb-4">
          <div className="container">
            <div className="d-flex flex-nowrap">
              <div>
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              <div className="input-group col">
                <input type="text" className="form-control heavy-grey" placeholder="Nunca dejes de buscar..." />
                <span className="input-group-btn">
                  <button className="btn btn-light-grey" type="button">
                    <img src={ic_Search} alt="logo" />
                  </button>
                </span>
              </div>

            </div>
          </div>
          
        </nav>

        <div className="container">

           <ul className="breadcrumb">
            <li>Electrônica Áudio e Vídeo</li>
            <li>iPod</li>
            <li>Rproductores</li>
            <li>iPod Touch</li>
            <li>32 GB</li>
          </ul>

        </div>
        
      </div>
    );
  }
}

export default App;
