import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import DropdownMenu from "react-bootstrap/DropdownMenu"
import DropdownItem from "react-bootstrap/DropdownItem"

import ModalSignUp from "./ModalSignUp";
import ModalLogIn from "./ModalLogIn";
// import MyAccount from "./MyAccount";



export default function BootNav(props){

  // state
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
  const [keyWord, setKeyWord] = useState('');



  const _handleLogOut = () => {
    // 1) clear localStorage : jwt, cart, userName
    localStorage.removeItem('jwt');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('totalProductsNumberInCart');


    // 2) update state, so BootNav can re-render
    setJwt('');

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
        <Button className="btn-space" variant="warning">
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
        <Button className="btn-space" variant="info" onClick={_handleLogOut}>
          LogOut
        </Button>
        <Link to={'/cart'}>
          <img className="cart-icon" src={process.env.PUBLIC_URL +`/images/cart-icon.png`}></img>
        </Link>
      </div>
    );
  } else {
    // not yet logged in
    buttonRight = (
      <ModalLogIn/>
    );
  }

  return(
    <Navbar sticky="top" expand="md" className="bg-light justify-content-between">
      <Navbar.Brand href="#/">
        <div>V's Toy</div>
        <img className="happy-kids" src={process.env.PUBLIC_URL + '/images/happy-kids.png'}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ButtonToolbar>
            <Button className="btn-space" href="#/" variant="danger">Home</Button>
            <Button className="btn-space" href="#about" variant="primary">About</Button>
          </ButtonToolbar>

          <Dropdown>
            <Dropdown.Toggle className="btn-space" variant="success" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <NavDropdown.Item id="category-1" href="#category/1">Age 0-2</NavDropdown.Item>
              <NavDropdown.Item id="category-2" href="#category/2">Age 2-5</NavDropdown.Item>
              <NavDropdown.Item id="category-3" href="#category/3">Age 5-8</NavDropdown.Item>
              <NavDropdown.Item id="category-4" href="#category/4">Age over 8</NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav>
          <Form inline onSubmit={_handleSubmit}>
            <FormControl type="text" placeholder="e.g. hellokitty" className="mr-sm-2" onChange={_handleChange}/>
            <Button type="submit" variant="secondary" className="btn-space" size="sm">Search</Button>
          </Form>
        </Nav>

        <Nav className="mr-auto">
          {buttonLeft}
          {buttonRight}
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
