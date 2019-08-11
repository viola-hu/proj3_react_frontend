import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import url from '../lib/url';

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";




export default function Order(props){

  const orderId = props.match.params.id
  console.log('orderId', orderId);
  const jwt = localStorage.getItem('jwt');

  const [lineItems, setLineItems] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // const URL = `https://toyshoppingsite.herokuapp.com/order/${orderId}`;
    const URL = `${url.URL}/order/${orderId}`;

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      }
    };

    axios.get(URL, configHeader)
    .then(res => {
      console.log(res.data);
      setLineItems(res.data);
      setErrorMessage('');
    })
    .catch(err => {
      console.warn('ERROR', err.response);
      // in backend, if that's an invalid request
      // e.g. user requested an order id that didn't belong to the user,
      // backend will return error as set
      // render json: {message: 'invalid request'}, status: 404
      setErrorMessage('Page Not Found.')
    });
  },[orderId]);

  let total = 0;
  lineItems.forEach(li => {
    total += li.quantity * li.product.price;
  })


  return(
    <div>
    {
      errorMessage
      ?
      <div class="page-not-found">
        {errorMessage}
      </div>
      :
      <div>
        <div className="success-purchase">
          <strong>Thanks for Purchase!</strong> {' '}
          <Link className="success-purchase-link" to={'/category/4'}>
            <strong>Find More Toys?!</strong>
          </Link>
        </div>
        <Table striped hover responsive="md">
          <thead>
            <tr>
              <th className="cart-label">
                <strong>Your Order</strong>
              </th>
              <th className="cart-label"><strong>Item</strong></th>
              <th className="cart-label"><strong>Quantity</strong></th>
              <th className="cart-label"><strong>Price</strong></th>
              <th className="cart-label"><strong>
                Subtotal</strong></th>
            </tr>
          </thead>

          <tbody>
            {lineItems.map(li => (
              <tr key={li.product.name}>
                <td>
                  <Link to={`/product/${li.product_id}`}>
                    <Image className="cart-thumbnail" src={process.env.PUBLIC_URL + `/images/${li.product.image}`} thumbnail />
                  </Link>
                </td>
                <td><strong>{li.product.name}</strong></td>
                <td><strong>{li.quantity}</strong></td>
                <td><strong>${li.product.price}</strong></td>
                <td><strong>${li.quantity * li.product.price}</strong></td>
              </tr>
            ))
          }
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td><strong className="cart-label">Total: </strong></td>
              <td><strong className="cart-label">${total}</strong></td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <Link to={'/category/4'}>
                  <Button className="back-to-home">Find More Toys</Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    }
    </div>
  );
}
