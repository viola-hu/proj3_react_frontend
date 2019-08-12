import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './css/bootstrap.min.css';// import Bootstrap css
import './css/main.css';// import custom css

import BootNav from './components/BootNav';
import Image from "react-bootstrap/Image";

import Home from "./components/Home";
import About from "./components/About";
import MyAccount from "./components/MyAccount";
import Category from "./components/Category";
import Product from "./components/Product";
import CartConfirm from "./components/CartConfirm";
import CheckOut from "./components/CheckOut";
import Payment from './components/Payment.js';
import Order from './components/Order';
import SearchResults from './components/SearchResults';


const Routes = (
  <Router>
    <div className="entireBody">
      <Route path="/" component={BootNav}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/account" component={MyAccount}/>
      <Route exact path="/category/:id" component={Category}/>
      <Route exact path="/product/:id" component={Product}/>
      <Route exact path="/cart" component={CartConfirm}/>
      <Route exact path="/checkout" component={CheckOut}/>
      <Route exact path="/payment" component={Payment}/>
      <Route exact path="/order/:id" component={Order}/>
      <Route exact path="/search/:q" component={SearchResults}/>

      <footer>
        <Image style={{width: '50vw'}} src={process.env.PUBLIC_URL + `/images/happykidsplaying01.jpg`} fluid />
        <Image style={{width: '50vw'}} src={process.env.PUBLIC_URL + `/images/happykidsplaying01.jpg`} fluid />
      </footer>

    </div>
  </Router>
);

export default Routes;
