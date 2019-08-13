import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown"
import ModalSignUp from "./ModalSignUp";
import ModalLogIn from "./ModalLogIn";
// import MyAccount from "./MyAccount";



export default function BootNav(props){

  // state
  const [keyWord, setKeyWord] = useState('');
  const [totalProductsNumberInCart, setTotalProductsNumberInCart] = useState(0);

  // useState(window.localStorage.getItem('totalProductsNumberInCart'));

  const currentProductsNumberInCart = window.localStorage.getItem('totalProductsNumberInCart');


  console.log('currentProductsNumberInCart from localStorage:', currentProductsNumberInCart);

  console.log('BootNav state - totalProductsNumberInCart', totalProductsNumberInCart);


  // when a user hasn't logged in , won't see the shopping bag icon!
  // thus, totalProductsNumberInCart won't show up as null!
  useEffect(() => {
    // whenever the route changes (location.pathname changes)
    // useEffect's callback will run
    // if state changes, the whole component will re-render
    // => here, check if the current localStorage has changed or not?
    // if yes, update state and it will trigger component to re-render
    if (currentProductsNumberInCart !== totalProductsNumberInCart){
      setTotalProductsNumberInCart(currentProductsNumberInCart);
    }
  });


  const _handleLogOut = () => {
    // 1) clear localStorage : jwt, cart, userName
    localStorage.removeItem('jwt');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('totalProductsNumberInCart');


    // 2) update state, so BootNav can re-render
    setTotalProductsNumberInCart(0);

    // 3) redirect to Home
    props.history.push('/');
  }; //_handleLogOut()


  const _handleChange = (event) => {
    console.log('search keyword:', event.target.value);

    // change state
    setKeyWord(event.target.value)
  };
  // console.log('State search keyword:',keyWord);


  const _handleSubmit = (event) => {
    event.preventDefault();
    // console.log('lalal');

    // if keyWord is empty, do nothing
    // if (!keyWord) console.log('do nothing');
    if (!keyWord) return;

    // if keyWord is not empty, redirect to SearchResults route
    // from there, do axios request, no matter what result is would be!
    props.history.push(`/search/${keyWord}`)
  };


  let buttonLeft;
  if(localStorage.getItem('jwt')){
    // already logged in
    buttonLeft = (
      <Link to={'/account'}>
        <Button className="nav-btn-space" variant="warning">
          Account
        </Button>
      </Link>
    );
  } else {
    // not yet logged in
    buttonLeft = (
      <ModalSignUp />
    );
  }

  let buttonRight;
  if(localStorage.getItem('jwt')){
    // already logged in
    buttonRight = (
      <div>
        <Button className="nav-btn-space" variant="info" onClick={_handleLogOut}>
          LogOut
        </Button>
        <Link to={'/cart'} className="cart-icon-bg">
          <p className="cart-icon-number">{totalProductsNumberInCart}</p>
        </Link>
      </div>
    );
  } else {
    // not yet logged in
    buttonRight = (
      <ModalLogIn />
    );
  }

  return(
    <Navbar sticky="top" expand="lg" className="entireBody">
      <Navbar.Brand href="#/">
        <div className="store-name">V's Toy</div>
        <img
          className="happy-kids"
          src={process.env.PUBLIC_URL + '/images/happy-kids.png'}
          alt="happykids"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav>
          <ButtonToolbar>
            <div>
              <Button className="nav-btn-space" href="#/" variant="danger">Home</Button>
            </div>
            <div>
              <Button className="nav-btn-space" href="#about" variant="primary">About</Button>
            </div>
            <Dropdown>
              <Dropdown.Toggle className="nav-btn-space" variant="success" id="dropdown-basic">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavDropdown.Item id="category-1" href="#category/1">Age 0-2</NavDropdown.Item>
                <NavDropdown.Item id="category-2" href="#category/2">Age 2-5</NavDropdown.Item>
                <NavDropdown.Item id="category-3" href="#category/3">Age 5-8</NavDropdown.Item>
                <NavDropdown.Item id="category-4" href="#category/4">Age over 8</NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonToolbar>
          <ButtonToolbar>
            <Form inline onSubmit={_handleSubmit}>
              <FormControl type="text" placeholder="e.g. hellokitty" className="search-form" onChange={_handleChange}/>
              <Button type="submit" variant="secondary" className="nav-btn-space" size="sm">Search</Button>
            </Form>
          </ButtonToolbar>
        </Nav>

        <Nav >
          <ButtonToolbar>
            {buttonLeft}
            {buttonRight}
          </ButtonToolbar>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}

// class BootNav
//
// <Image className="cart-icon" src="../public/images/cart-icon.png" fluid />

// <img className="cart-icon" src={process.env.PUBLIC_URL + '/images/c101.jpg'} />

// <div className="cart-icon">
//   </div>



// buttonRight = (
//   <div>
//     <Button className="nav-btn-space" variant="info" onClick={_handleLogOut}>
//       LogOut
//     </Button>
//     <Link to={'/cart'}>
//       <img className="cart-icon" src={process.env.PUBLIC_URL +`/images/cart-icon.png`}></img>
//     </Link>
//   </div>
// );
