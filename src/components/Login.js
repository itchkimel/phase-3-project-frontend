// import Modal from 'react-bootstrap/Modal'
import React, {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap'


export default class Login extends Component{

    

    state = {
        firstName: '',
        lastName: '',
        email: '',
        custGuitars: [],
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

    checkDB = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/customer/${this.state.firstName} ${this.state.lastName}`)
        .then(res => res.json())
        .then(res => {
            if (res.message == 'null'){
                alert("Please register")
            }else{
                this.props.customersCollection(res); this.props.handleLogin(); this.props.routerProps.history.push("/guitars")
            }
        })

    }
    
 


    render(){

      return(
        <div>
            <h1 className="loginRegisterText">Login</h1>
            <Form className="Login" >
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
            <Form.Group size ="lg" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We require an email. We'll never share your it with anyone else.
                </Form.Text>
            </Form.Group>
            {this.state.email === '' ? "Please enter email" : <Button onClick={this.checkDB} variant="primary" type="submit">
                Login
                </Button>}
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