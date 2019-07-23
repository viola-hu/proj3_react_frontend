import React, {useState} from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

import SignUpForm from "./SignUpForm";



export default function ModalSignUp(props){

  const[modalShow, setModalShow] = useState(false);

  // console.log('Re-rendered ModalSignUp!!');

  return(
    <ButtonToolbar>
      <Button className="btn-space" variant="warning" onClick={() => setModalShow(true)}>
        SignUp
      </Button>

      <SignUpVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

// functional component
function SignUpVerticallyCenteredModal(props) {
  return(
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm onHide={props.onHide}/>
      </Modal.Body>
    </Modal>
  );
}
