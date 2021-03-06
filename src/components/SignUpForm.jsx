import React, {useState} from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import url from '../lib/url';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUpForm(props){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwConfirmation, setPwConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);

  const resetErrorMessageIfAnyTypedValue = (event) => {
    if(event.target.value.length > 0){
      setErrorMessage([]);
    }
  };

  const _handleNameChange = (event) => {
    resetErrorMessageIfAnyTypedValue(event);
    setName(event.target.value);
  };

  const _handleEmailChange = (event) => {
    resetErrorMessageIfAnyTypedValue(event);
    setEmail(event.target.value);
  };

  const _handlePasswordChange = (event) => {
    resetErrorMessageIfAnyTypedValue(event);
    setPassword(event.target.value);
  };

  const _handlePasswordConfirmation = (event) => {
    resetErrorMessageIfAnyTypedValue(event);
    setPwConfirmation(event.target.value)
  };

  // 1) create user, 2) get jwt
  const _handleSubmit = (event) => {
    event.preventDefault();

    const URL = `${url.URL}/signup`;

    const data = {
      user:{
        name,
        email,
        password,
        password_confirmation: pwConfirmation
      }
    };

    axios.post(URL, data)
    .then(res => {
      console.log('created user!', res);
      getTokenAndRedirect();
    })
    .catch(err => {
      console.warn('SignUp ERROR!!!', err.response.data.errors); // an array of errors
      setErrorMessage(err.response.data.errors)
    });
  }

// *********************************************
  const getTokenAndRedirect = () => {
    const URL = `${url.URL}/user_token`;
    const data = {
      auth: {
        email,
        password
      }
    };

    axios.post(URL, data)
    .then(res => {
      console.log('response from server:', res, props);
      // once login success
      // 1) store jwt token in the localStorage
      window.localStorage.setItem('jwt', res.data.jwt);
      // 2) store cart line_item number into localStorage
      // in order to show on the top right - shopping bag
      // as the user just signed up, the cart's line items number should be "0"
      window.localStorage.setItem('totalProductsNumberInCart', 0);
      // 3) store user name + email into localStorage
      window.localStorage.setItem('userName', name);
      window.localStorage.setItem('userEmail', email);
      // 4) hide the modal
      props.onHide();
      // 5) couldn't find a way to rerender the current route,
      // thus, use .go() to refresh current page!
      props.history.go(0);
    })
    .catch(err => {
      // if any error, update state and print out in UI
      console.warn('LOGIN TOKEN ERROR:', err);
      setErrorMessage(['Error connecting to server'])
    });
  }

  // TEST:
  // console.log('name:', name);
  // console.log('email:', email);
  // console.log('password:', password);
  // console.log('pwConfirmation:', pwConfirmation);
  // console.log('errorMessage', errorMessage);

  const renderErrorMessage = (
    <div>
      {errorMessage.map(error => (
        <Form.Text key={error} className="errorMessage">
          {error}
        </Form.Text>
        )
      )}
    </div>
  )

  return(
    <Form onSubmit={_handleSubmit}>
      {renderErrorMessage}
      <Form.Group controlId="signUpFormBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="enter your name" onChange={_handleNameChange}/>
      </Form.Group>

      <Form.Group controlId="signUpFormBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="enter email" onChange={_handleEmailChange}/>
      </Form.Group>

      <Form.Group controlId="signUpFormBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter password" onChange={_handlePasswordChange}/>
      </Form.Group>

      <Form.Group controlId="signUpFormPasswordConfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="enter password again" onChange={_handlePasswordConfirmation}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default withRouter(SignUpForm);
