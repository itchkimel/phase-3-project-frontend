// import Modal from 'react-bootstrap/Modal'
import React, {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap'


export default class Register extends Component{

    

    state = {
        firstName: '',
        fullName: '',
        email: '',
    }
    
    handleFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    handleFullName = (e) => {
        this.setState({ fullName: this.state.firstName + " " + e.target.value})
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    addCustomer = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/customer/`,{
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            firstName: '',
            fullName: '',
            email: '',
          });
          alert("Thanks for registering to Nick's Guitar World! \n Redirecting to login in 3 seconds")
          setTimeout(() => {
            this.props.routerProps.history.push("/login")
          }, 3000)
        })
    }
    
 


    render(){

      return(
        <div>
            <Form  >
            <Form.Group >
                <Form.Label>Register to order</Form.Label>
                <Form>
                    <Form.Row>
                        <Col>
                        <Form.Control onChange={this.handleFirstName} placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control onChange={this.handleFullName} placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {this.state.email === '' ? "Please enter email to register" : <Button onClick={this.addCustomer} variant="primary" type="submit">
                Submit
                </Button>}
            </Form>
        </div>
      )}
}