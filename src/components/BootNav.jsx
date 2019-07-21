import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import DropdownMenu from "react-bootstrap/DropdownMenu"
import DropdownItem from "react-bootstrap/DropdownItem"

import ModalSignUp from "./ModalSignUp";
// import ModalLogIn from "./ModalLogIn";



export default class BootNav extends Component {
  render(){
    return(
      <Navbar expand="sm" className="bg-light justify-content-between">
        <Navbar.Brand href="#/">V's Toy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ButtonToolbar>
              <Button className="btn-space" href="/" variant="danger">Home</Button>
              <Button className="btn-space" href="#about" variant="primary">About</Button>
            </ButtonToolbar>
            {
            // <Nav.Link href="/">Home</Nav.Link>
            // <Nav.Link href="#about">About</Nav.Link>
            }
            <Dropdown>
              <Dropdown.Toggle className="btn-space" variant="success" id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              {
            // <NavDropdown title="Category" id="basic-nav-dropdown">
              }
              <Dropdown.Menu>
                <NavDropdown.Item id="category-1" href="#category/1">Age 0-2</NavDropdown.Item>
                <NavDropdown.Item id="category-2" href="#category/2">Age 2-5</NavDropdown.Item>
                <NavDropdown.Item id="category-3" href="#category/3">Age 5-8</NavDropdown.Item>
                <NavDropdown.Item id="category-4" href="#category/4">Age over 8</NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {
            // </NavDropdown>
            }
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="e.g. hellokitty" className="mr-sm-2" />
            <Button variant="warning" className="btn-space" size="sm">Search</Button>
          </Form>
          <Nav className="mr-auto">
            <ModalSignUp />
            {
            // <ModalLogIn />
            }
            <Nav.Item>
            <img src={process.env.PUBLIC_URL + '/images/cart-icon.png'} />
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
} // class BootNav
  //
  // <Image className="cart-icon" src="../public/images/cart-icon.png" fluid />


// <div className="cart-icon">
//   </div>
