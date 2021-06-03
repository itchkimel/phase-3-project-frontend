import React, {Component} from 'react'
import CartGuitar from './CartGuitar'
import {Button} from 'react-bootstrap'


export default class Cart extends Component{



  render(){
    // console.log(this.props.cartItems)
      return(
        <div >
          {this.props.cartItems.map(guitar => <CartGuitar guitar={guitar} deleteFromCart={this.props.deleteFromCart} />)}
          <Button> Purchase </Button>
        </div>
      )
  }
}