import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

// import Bootstrap css
import './css/bootstrap.min.css';
// import custom css
import './css/main.css';


import BootNav from './components/BootNav';



const Routes = (
  <Router>
    <div className="entireBody">

      <BootNav />

      <div className="container">

      </div>

    </div>
  </Router>
);

export default Routes;


// <Route exact path="/" component={Home}/>
