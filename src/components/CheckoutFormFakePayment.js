import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import url from '../lib/url';
import Order from './Order';

import Button from "react-bootstrap/Button";


// fake that it's paid!
function CheckoutForm(props){
  // const[message, setMessage] = useState('');

  const submit = () =>{
    // setMessage('Congrats! Purchase complete!')
    // send to server to move line_items from cart into order
    // also update product stock!
    moveLineItemsFromCartToOrderAndUpdateStock();
  };


  const moveLineItemsFromCartToOrderAndUpdateStock = ()=>{
    // const URL = `https://toyshoppingsite.herokuapp.com/order`;
    // const URL = `http://localhost:3000/order`;
    const URL = `${url.URL}/order`;

    const jwt = localStorage.getItem('jwt');

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
    };

    axios.get(URL, configHeader)
    .then(res => {
      console.log('response of success order id:', res.data.id);

      // get the order_id from response, and redirect!
      const orderId = res.data.id
      // 1) if order succeed, redirect to order page, and show messages there!
      props.history.push(`/order/${orderId}`)
    })
    .catch(err => {
      // 2) if order failed, show message like out of order!
      // ************TODO****************
      console.warn('ERROR!');
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
