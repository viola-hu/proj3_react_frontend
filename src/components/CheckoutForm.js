import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import Button from "react-bootstrap/Button";

import Order from './Order';

function CheckoutForm(props){
  // const[message, setMessage] = useState('');

  const submit = () =>{
    // setMessage('Congrats! Purchase complete!')
    // 1) send to server to move line_items from cart into order
    moveLineItemsFromCartToOrder();

    // 2) redirect to order page, and show messages there!
    props.history.push('/order')
  };

  const moveLineItemsFromCartToOrder = ()=>{
    const URL = `https://toyshoppingsite.herokuapp.com/order`;

    const jwt = localStorage.getItem('jwt');

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
    };

    axios.get(URL, configHeader)
    .then(res => {
      console.log('response:', res);

    })
    .catch(err => {

    });
  };



  return(
    <div className="payment-form">
      <p>Would you like to complete the purchase?</p>
      <div style={{borderRadius: '0.5em', height: '100px', padding: '50px', border: '3px solid orange', marginTop: '10px', marginBottom: '30px',  backgroundColor: 'aliceblue', width:'500px'}} >
        <CardElement />
      </div>
      <Button id="pay-by-card" onClick={submit}>Send</Button>
    </div>
  );
}

export default withRouter(CheckoutForm);
