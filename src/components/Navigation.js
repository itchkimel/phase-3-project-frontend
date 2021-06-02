import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class Navigation extends Component{

  handleLogin = () => {

  }

  render(){
 
      return(
        <div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand as={Link} to="/" >Nick's world</Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/guitars">Guitars</Nav.Link>
              <Nav.Link as={Link} to="/yourguitars">Your Collection</Nav.Link>
              {/* <Nav.Link onclick={<LoginModal></LoginModal>}> Login </Nav.Link> */}
              <Nav.Link as={Link} to="/login"> Login </Nav.Link>
              <Nav.Link as={Link} to="/cart"> Cart </Nav.Link>
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

{/* <div >
<NavLink to="/"><a className ="active">Home</a></NavLink>
<NavLink to="/guitars"><a className ="active">Guitars</a></NavLink>
<NavLink to="/yourguitars"><a className ="active">Your Guitars</a></NavLink>
</div> */}
