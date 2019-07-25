import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import FormText from "react-bootstrap/FormText";


function LogInForm(props){
  //use hook to replace this.state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [jwt, setJwt] = useState('');


  const _handleEmailChange = (event) => {
    if(event.target.value.length > 0){
      setErrorMessage('');
    }
    // event.persist();
    // console.log(event);
    // console.log('changed email:', event.target.value); // input value - ok!
    setEmail(event.target.value);
  };

  const _handlePasswordChange = (event) => {
    if(event.target.value.length > 0){
      setErrorMessage('');
    }
    setPassword(event.target.value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    if(email.length === 0 || password.length === 0){
      setErrorMessage('Please enter an email and password')
    } else {
      performLogIn();
    }
  };

  // console.log(errorMessage);

  const performLogIn = () => {
    // console.log('email:', email);
    // console.log('password:', password); // tested ok!
    const URL = "https://toyshoppingsite.herokuapp.com/user_token";
    const data = {
      auth: {
        email,
        password
      }
    };
    // example:
    // {"auth":
    //   {"email": "foo@bar.com",
    //     "password": "secret"
    //   }
    // }

    axios.post(URL, data)
    .then(res => {
      console.log('response from server:', res, props);
      setJwt(res.data.jwt);
      // once login success
      // 1) store jwt token in the localStorage
      window.localStorage.setItem('jwt', res.data.jwt);
      // 2) send another axios request to get the cart from DB, to save in localStorage
      getCart();
      // 3) hide the modal
      props.onHide();
      // 4) go to the next page
      props.history.push('/account');
    })
    .catch(err => {
      // if any error, update state and print out in UI
      console.warn('!!!ERROR:', err);
      setErrorMessage('Invalid email or password')
    });
  };
  // **************TODO:**************
  // once a user has logged in, either
  // 1) along with the login token, send back user cart information: line_items
  // 2) or, send another axios request to get the line_items information
  // to store inside localStorage to show the shopping cart item number!
  const getCart = ()=>{
    console.log('send another axios request!');
    axios.get('https://toyshoppingsite.herokuapp.com/cart')
    // continue!!!!


  };

  //
  // // TEST & LEARN:
  // // if state (email / password's value) changes, then the whole function component will run again!
  // // thus, the below line runs everytime the typed-in email's value changes!
  // console.log('normal console.log', email);
  // // Also, can use useEffect to catch the change of state
  // useEffect(()=> console.log('useEffect:', email), [email]);
  // console.log('currentPassword:', password);


  return(
    <Form onSubmit={_handleSubmit}>
      <Form.Text className="errorMessage">
        {errorMessage}
      </Form.Text>
      <Form.Group controlId="loginFormBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="enter email" onChange={_handleEmailChange}/>
      </Form.Group>

      <Form.Group controlId="loginFormBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter password" onChange={_handlePasswordChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

// using Curl in the bash to test - SUCCESS!
// curl -X POST "https://toyshoppingsite.herokuapp.com/user_token" -d '{"auth": {"email": "lily@lily.com", "password": "chicken"}}' -H "Content-Type: application/json"


export default withRouter(LogInForm);
