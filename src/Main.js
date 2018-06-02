import React, { Component } from 'react';
import logo from './images/virtual-reality.png';
import Typed from 'react-typed';
import Card from './components/Card/Card.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-header">
          <img src={logo} className="vr-logo" alt="logo" />
          <div className="main-header-typed">
            <Typed 
              strings={['CL: Intro to Virtual Reality']} 
              typeSpeed={50} 
            />
          </div>
        </div>

        <div className="main-projects">
          <Card />
        </div>
      </div>
    );
  }
}

export default Main;
