import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SignUpForm(){
  return(
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="enter your name"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="passwordConfirmation" placeholder="enter password again" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
