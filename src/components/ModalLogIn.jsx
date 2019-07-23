import React, {useState} from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

import LogInForm from "./LogInForm";



export default function ModalLogIn(props){

  const[modalShow, setModalShow] = useState(false);

  return(
    <ButtonToolbar>
      <Button className="btn-space" variant="info" onClick={() => setModalShow(true)}>
        LogIn
      </Button>


      <LogInVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

// functional component
function LogInVerticallyCenteredModal(props) {
  return(
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LogInForm onHide={props.onHide}/>
      </Modal.Body>
    </Modal>
  );
}
