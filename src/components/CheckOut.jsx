import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import url from '../lib/url';
import Payment from './Payment';

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CheckOut(props){
  const jwt = localStorage.getItem('jwt');

  const [lineItems, setLineItems] = useState([]);

  useEffect(()=>{
    // const URL = `https://toyshoppingsite.herokuapp.com/cart`;
    const URL = `${url.URL}/cart`;

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

  let total = 0;
  lineItems.forEach(li => {
    total += li.quantity * li.product.price;
  })

  return(
    <Container style={{maxWidth:'90vw'}}>
      <Row>
        <Col lg={8}>
          <Row>
            <h3 className="confirmorder-title">Confirm order</h3>
          </Row>
          <Table striped hover responsive="lg">
            <thead>
              <tr>
                <th className="cart-label">
                  <Link to={'/cart'}>
                    <Button className="back-to-cart">
                      Back to cart
                    </Button>
                  </Link>
                </th>
                <th className="cart-label"><strong>Item</strong></th>
                <th className="cart-label"><strong>Quantity</strong></th>
                <th className="cart-label"><strong>Price</strong></th>
                <th className="cart-label"><strong>Subtotal</strong></th>
              </tr>
            </thead>

            <tbody>
              {
                lineItems.map(li => (
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
                <td>
                </td>
                <td><strong className="cart-label">Total: </strong></td>
                <td><strong className="cart-label">${total}</strong></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={4}>
          <Payment />
        </Col>
      </Row>
    </Container>

  );
}
