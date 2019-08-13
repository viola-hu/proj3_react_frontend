import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import url from '../lib/url';

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Order(props){

  const orderId = props.match.params.id
  console.log('orderId', orderId);
  const jwt = localStorage.getItem('jwt');

  const [lineItems, setLineItems] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
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
      <Container>
        <Row>
          <Col lg={8}>
            <Table striped hover responsive="lg">
              <thead>
                <tr>
                  <th className="cart-label">
                    <strong>My Order</strong>
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
              </tbody>
            </Table>
          </Col>
          <Col lg={4}>
            <div className="success-purchase">Thanks for Purchase!</div> {' '}

            <Image
              src={process.env.PUBLIC_URL + `/images/thanks.gif`}
              style={{width: '100%'}}
            />

          <div className="find-more-toys">
              <Link to={'/'}>
                <Button className="back-to-home">Find More Toys</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    }
    </div>
  );
}
