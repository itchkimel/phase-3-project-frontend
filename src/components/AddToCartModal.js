import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const AddToCartModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Cart Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Added New Axe to Prospects!</h4>
        <p>
          Continue browsing or head to the Cart to see your rig and head to checkout.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default AddToCartModal