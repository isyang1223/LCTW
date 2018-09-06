import React, { Component } from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo.png';
import Safeway from '../../images/Sponsors/Safeway.jpg';
import Lucky from '../../images/Sponsors/Lucky.jpg';
import TheHomeDepot from '../../images/Sponsors/TheHomeDepot.png';
import Walmart from '../../images/Sponsors/Walmart.png';
import PetersBakery from '../../images/Sponsors/PetersBakery.png';
import SCPublicHealth from '../../images/Sponsors/SCPublicHealth.png';
import PlannedParenthood from '../../images/Sponsors/PlannedParenthood.jpg';
import HomeFirst from '../../images/Sponsors/HomeFirst.png';

import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing box">
          <div>
            <h1 id="toptext" className="display-1">~ Love One Another ~</h1>
            <img className="logo" src={logo} alt="logo" />
            <h1 id="bottomtext" className="display-1">Building LOVING Communities...</h1>
          </div>
        </div>
        
        <div className="container">
          <h1 className="display-4 title">SPONSORS</h1>
          <a href="https://www.plannedparenthood.org/" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={PlannedParenthood} alt="Planned Parenthood"></img></a>
          <a href="https://www.sccgov.org/sites/phd/services/hiv-resources/pages/std-hiv-test-home.aspx" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={SCPublicHealth} alt="Santa Clara Public Health"></img></a>
          <a href="http://petersbakery.com/" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={PetersBakery} alt="Peter's Bakery"></img></a>
          <img className="w-100 img-fluid d-inline-block" src={Safeway} alt="Safeway"></img>
          <img className="w-100 img-fluid d-inline-block" src={Lucky} alt="Lucky"></img>
          <img className="w-100 img-fluid d-inline-block" src={TheHomeDepot} alt="The Home Depot"></img>
          <img className="w-100 img-fluid d-inline-block" src={Walmart} alt="Walmart"></img>
          <img className="w-100 img-fluid d-inline-block" src={HomeFirst} alt="Home First"></img>
        </div>
      </div>
    );
  }
}

export default Landing;
