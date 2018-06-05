import React, { Component } from 'react';
import logo from './images/virtual-reality.png';
import Typed from 'react-typed';
import Card from './components/Card/Card.js';

import darius from './images/darius.png';
import amy from './images/amy.png';
import jennifer from './images/jennifer.png';
import abby from './images/abby.png';
import arthur from './images/arthur.png';
import isabelle from './images/isabelle.png';

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
          <Card name={'Darius'} image={darius} link={'https://www.youtube.com/watch?v=XPPpFM3PESc'}/>
          <Card name={'Amy'} image={amy} link={'https://www.youtube.com/watch?v=-tyqimdWxdo'} />
          <Card name={'Jennifer'} image={jennifer} link={'https://www.youtube.com/watch?v=nAuAhtFON68'} />
          <Card name={'Abby'} image={abby} link={'https://www.youtube.com/watch?v=Q8HeOE9MxFE'} />
          <Card name={'Arthur'} image={arthur} link={'https://www.youtube.com/watch?v=JWL9abudYhw'} />
          <Card name={'Isabelle'} image={isabelle} link={'https://www.youtube.com/watch?v=VpImoG_gIEw'} />
        </div>

        <div className="main-footer">
          © Creative Labs 2018
        </div>
        
      </div>
    );
  }
}

export default Main;
