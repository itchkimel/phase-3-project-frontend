import React, {Component} from 'react'
import CustGuitarCard from './CustGuitarCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

export default class CustomerGuitars extends Component{
  

  render(){
    let guitar_arr = this.props.collection
      return(
        <div >
         <h1 className="loginRegisterText">Purchases</h1>
          <Container>
          <Row lg={4} className="justify-content-md-center">
          {guitar_arr.orders.map(guitar => <CustGuitarCard guitar={guitar}/>)}
          </Row>  
          </Container>
        </div>
      )
  }
}