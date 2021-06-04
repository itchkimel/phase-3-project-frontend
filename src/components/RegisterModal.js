import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const RegisterModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Create a New Account!</h4>
        <p>
          Simply register your full name and email to shop the collection and receive updates on any deals and steals. We have our team working around the clock to make sure your information is safe while you stay up to date!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default RegisterModal