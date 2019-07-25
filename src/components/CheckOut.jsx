import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function CheckOut(props){
  const jwt = localStorage.getItem('jwt');

  const [lineItems, setLineItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // const [quantity, setQuantity] = useState(0);
  // const [product, setProduct] = useState({});

  useEffect(()=>{
    const URL = `https://toyshoppingsite.herokuapp.com/cart`;

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
    };

    axios.get(URL, configHeader)
    .then(res => {
      console.log('response:', res.data); // an array of all line_item objects of the cart / current_user
      setLineItems(res.data);
    })
    .catch(err => {
      console.warn('SERVER ERROR:', err);
      // if any error, e.g. unlogged in user send random request in address bar
      // redirect to home page
      props.history.push('/');
    });
  },[]);

  let subtotal = 0;
  lineItems.forEach(li => {
    subtotal += li.quantity * li.product.price;
  })

  return(
    <Table responsive="md">
      <thead>
        <tr>
          <th className="cart-label">
            <strong>Confirm order</strong>
          </th>
          <th className="cart-label"><strong>Item</strong></th>
          <th className="cart-label"><strong>Quantity</strong></th>
          <th className="cart-label"><strong>Price</strong></th>
          <th className="cart-label"><strong>Total</strong></th>
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
            <td>{li.quantity}</td>
            <td>${li.product.price}</td>
            <td>${li.quantity * li.product.price}</td>
          </tr>
        ))
      }
        <tr>
          <td> </td>
          <td> </td>
          <td>
            <Link to={'/cart'} id="back-to-cart">
              <strong>
                Back to cart
              </strong>
            </Link>
          </td>
          <td>
            <strong className="cart-label">
              Subtotal:
            </strong>
            ${subtotal}
          </td>
          <td> </td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>
            <Link to={'/'}>
              <Button id="pay-by-card">Pay by Card</Button>
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
