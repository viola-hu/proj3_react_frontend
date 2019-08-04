import React, {useState} from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export default function ModalHint(props){

  const[modalShow, setModalShow] = useState(false);


  return(
    <ButtonToolbar>
      <button className="hint-button" onClick={() => setModalShow(true)}>
        <h5>Hint</h5>
      </button>

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
          About Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="note">
        <p><small>
          Hi there, <br/>
          We are using Stripe test environment.<br/>
          Please select from the below cards to proceed.
        </small></p>
        <p><small>
          <strong>Visa: 4242 4242 4242 4242</strong>
        </small></p>
        <p><small>
          <strong>Mastercard: 5555 5555 5555 4444</strong>
        </small></p>
        <p><small>
          <strong>American Express: 3782 822463 10005</strong>
        </small></p>
        <p><small>
          <strong>
          * a valid expiration date in the future <br/>
          * any random CVC number
          </strong>
        </small></p>
      </Modal.Body>
    </Modal>
  );
}
