// import Modal from 'react-bootstrap/Modal'
import React, {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import ThanksForRegisterModal from './ThanksForRegisterModal'


export default class Register extends Component{

    

    state = {
        firstName: '',
        fullName: '',
        email: '',
        show: false,
    }
    
    showModal = (e) => {
      this.setState({
          show: true
      })
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
          
          // setTimeout(() => {
            this.props.routerProps.history.push("/login")
          // }, 3000)
        })
    }
    
 


    render(){

      return(
        <div>
            <h1 className="loginRegisterText">Register</h1>
            <Form className="Login" >
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
                    We require an email. We'll never share it with anyone else.
                </Form.Text>
            </Form.Group>
            {this.state.email === '' ? "" : <Button onClick={() => { 
              this.showModal();
              this.addCustomer();
            }} variant="primary" type="submit">
                Register
                <ThanksForRegisterModal show={this.state.show}/>
                </Button>}
            </Form>
        </div>
      )
    }
}