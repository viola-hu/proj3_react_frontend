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

export default function MyAccount(){

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  //************** TODO: tomorrow **********************
  // 1, continue finishing order retrieve
  // 2, user update account +
  // 3, delete Account
  // 4, CSS

  return(
    <div>

      <Container>
        <Row>
          <Col sm={12} md={4}>
            <h5>My Account</h5>
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userName}</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userEmail}</td>
                </tr>
              </tbody>
            </Table>
            <ButtonToolbar>
              <Button className='update-account' variant="outline-info">Update Account</Button><br/>
              <Button className='delete-account' variant="outline-secondary">Delete Account</Button>
            </ButtonToolbar>
          </Col>

          <Col sm={12} md={8}>
            <h5>Order</h5>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Order1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Order2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <ListGroup>
                    <ListGroup.Item>No style</ListGroup.Item>
                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                      Secondary
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success">
                      Success
                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                      Danger
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                      Warning
                    </ListGroup.Item>
                    <ListGroup.Item action variant="info">
                      Info
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                      Light
                    </ListGroup.Item>
                    <ListGroup.Item action variant="dark">
                      Dark
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <footer>
        <Image style={{maxWidth: '50vw'}} src={process.env.PUBLIC_URL + `/images/happykidsplaying01.jpg`} fluid />
        <Image style={{maxWidth: '50vw'}} src={process.env.PUBLIC_URL + `/images/happykidsplaying01.jpg`} fluid />
      </footer>
    </div>

  );
}

// <Image style={{maxWidth: '45vw'}} src={process.env.PUBLIC_URL + `/images/playingkids001.png`} fluid />
// <Image style={{maxWidth: '55vw'}} src={process.env.PUBLIC_URL + `/images/playingkids002.png`} fluid />
