import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ThanksForRegisterModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Successful
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>We Look Forward to Providing You With The Best Service!</h4>
        <p>
          Please log in to browse our collection of guitars and start your journey through Nick Guitar Bar.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ThanksForRegisterModal