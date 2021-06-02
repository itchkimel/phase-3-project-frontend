import Modal from 'react-bootstrap/Modal'
import React, {Component} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'


export default class Login extends Component{

    state = {
        CustomerGuitars: [], 
    }
  
  


    render(){

      return(
        <div>
            <Form>
            <Form.Group >
                <Form.Label>Full Name</Form.Label>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </Form>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
      )
    }
}


//   checkCustomer = ()=> {
//     fetch("http://localhost:9292/guitars")
//     .then(res => res.json())
//     .then( guitars => {
//       this.setState({
//         guitars
//       })
//     })