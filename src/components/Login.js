import Modal from 'react-bootstrap/Modal'
import React, {Component} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'


export default class Login extends Component{

    

    state = {
        firstName: '',
        lastName: '',
        email: '',
        custGuitars: [],
        loggedIn: false
    }
    
    handleFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    handleLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    checkDB = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/customer/${this.state.firstName} ${this.state.lastName}`)
        .then(res => res.json())
        .then(res => {
            if (res.message == 'null'){
                alert("Please register")
            }else 
                {console.log(res)}
        })

    }
    
 


    render(){

      return(
        <div>
            <Form>
            <Form.Group >
                <Form.Label>Full Name</Form.Label>
                <Form>
                    <Form.Row>
                        <Col>
                        <Form.Control onChange={this.handleFirstName} placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control onChange={this.handleLastName} placeholder="Last name" />
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
            <Button onClick={this.checkDB} variant="primary" type="submit">
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