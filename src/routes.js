import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './css/bootstrap.min.css';// import Bootstrap css
import './css/main.css';// import custom css

import BootNav from './components/BootNav';
import Image from "react-bootstrap/Image";

import Home from "./components/Home";
import MyAccount from "./components/MyAccount";
import Category from "./components/Category";



const Routes = (
  <Router>
    <div className="entireBody">

      <Route path="/" component={BootNav}/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/account" component={MyAccount}/>
      <Route exact path="/category/:id" component={Category}/>



      <footer className="body-footer">
        {
        // <img src={process.env.PUBLIC_URL + '/happykids.jpg'} />

        // <Image className="happykids" src="../public/images/happykids.jpg" fluid />
        }

      </footer>
    </div>
  </Router>
);

export default Routes;
