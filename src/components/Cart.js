import React, {Component} from 'react'
import CartGuitar from './CartGuitar'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'


export default class Cart extends Component{



  render(){
    // console.log(this.props.cartItems)
      return(
        <div >
          <h1 className="loginRegisterText">My Cart<br></br>
          <Button className="loginRegisterText" variant="outline-dark" onClick={() => this.props.purchaseCart()}> Purchase </Button>
          </h1>
          <Container>
          <Row lg={4} className="justify-content-md-center">
          {this.props.cartItems.map(guitar => <CartGuitar guitar={guitar} deleteFromCart={this.props.deleteFromCart} />)}
          </Row>  
          </Container>
        </div>
      )
  }
}