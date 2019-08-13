import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import url from '../lib/url';


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";

export default function MyAccount(props){

  // state
  const [orders, setOrders] = useState([]);

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  // 1, when page loaded, first thing to retrieve all the user's orders including line-items
  useEffect(() => {

    const jwt = localStorage.getItem('jwt');

    const URL = `${url.URL}/orders`;

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
    };

    axios.get(URL, configHeader)
    .then(res => {
      console.log('Request orders response:', res.data);
      // array of all orders,
      // each order includes an array of all line_items
      // each line_item includes associated product
      // However, there could be no order at all
      setOrders(res.data);

    })
    .catch(err => {
      console.warn('SERVER ERROR:', err);
    });
  },[]);

  // ****** TODO *********
  // 2, update Account
  // 3, delete Account




  return(
    <div>

      <Container className='account-container'>
        <Row>
          <Col sm={12} md={4}>
            <h3 className="account-title">My Account</h3>
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th className="account-table-header">User Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userName}</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th className="account-table-header">Email Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userEmail}</td>
                </tr>
              </tbody>
            </Table>
            <ButtonToolbar>
              <Button className='update-account' variant="outline-warning">Update Account</Button><br/>
              <Button className='delete-account' variant="outline-info">Delete Account</Button>
            </ButtonToolbar>
          </Col>

          <Col sm={12} md={8}>
            <h3 className="account-title">My Orders</h3>
            {
              orders.length === 0
              ?
              (
              <div>
                <h5 className="no-purchase">No purchase yet. Go get them! </h5>
                <Image src={process.env.PUBLIC_URL + `/images/nopurchaseyet02.gif`} fluid />
              </div>
              )
              :
              <Accordion defaultActiveKey="0">
                <Card>
                  {
                    orders.map((order, index)=> (
                      <div key={index}>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={`${index + 1}`}
                          className="order-card-header"
                        >
                        <Row>
                          <Col>
                            <small>#</small>{' '}Order{' '}{order.id} {' '}
                            <small><i>{order.order_created_at_date_formatted}</i></small>
                          </Col>
                          <Col style={{textAlign: 'right'}}>
                            <span>Total: ${order.order_total_amount}</span>
                          </Col>
                        </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={`${index + 1}`} key={order.id}>
                            <Card.Body className="order-card-body">
                              {
                                order.line_items.map(li =>(
                                  <Row className="order-card-row" key={li.id}>
                                    <Col sm={12} md={4}>
                                      <Link to={`/product/${li.product_id}`}>
                                      <img
                                        name={li.product.name}
                                        src={process.env.PUBLIC_URL + `/images/${li.product.image}`}
                                        className="order-list-image"
                                      />
                                      </Link>
                                    </Col>
                                    <Col sm={12} md={8}>
                                      <h5 className="order-list-product">{li.product.name}</h5>
                                      <p>Price: ${li.product.price}</p>
                                      <p>Purchased Number: {li.quantity}</p>
                                      <p>Subtotal: ${li.quantity * li.product.price}</p>
                                    </Col>
                                  </Row>
                                ))
                              }
                            </Card.Body>
                        </Accordion.Collapse>
                      </div>
                    ))
                  }
                </Card>
              </Accordion>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
