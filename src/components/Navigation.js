import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Navigation extends Component{

  render(){
 
      return(
        <div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand as={Link} to="/" className="nav-text">Nicks Guitar World</Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/guitars">Guitars</Nav.Link>
              <Nav.Link as={Link} to="/yourguitars">Your Guitars</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
      </div>
      )
  }
}
