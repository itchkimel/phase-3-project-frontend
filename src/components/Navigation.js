import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class Navigation extends Component{




  render(){
 
      return(
        <div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand as={Link} to="/" className="nav-text">Nick's Guitar Bar</Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/guitars">Guitars</Nav.Link>
              {/* {<Nav.Link as={Link} to="/yourguitars">Your Collection</Nav.Link>} */}
              {/* <Nav.Link onclick={<LoginModal></LoginModal>}> Login </Nav.Link> */}
              {this.props.loggedIn === false ? null : <Nav.Link as={Link} to="/yourguitars">Your Collection</Nav.Link>}
              {this.props.loggedIn === false ? null : <Nav.Link as={Link} to="/cart"> Cart </Nav.Link>}
            </Nav>
            <Button variant="outline-light"><Nav.Link as={Link} to="/register" > Register </Nav.Link></Button>
            
              {this.props.loggedIn === false ? <Button variant="outline-light"><Nav.Link as={Link} to="/login" > Login </Nav.Link></Button>: <Button variant="outline-light" 
              onClick={() => {
                this.props.handleLogout()
                this.props.routerProps.history.push("/")
              }}> Logout </Button>}
           
          </Navbar>
      </div>
      )
  }
}
