import React, {Component} from 'react'
import CustGuitarCard from './CustGuitarCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

export default class CustomerGuitars extends Component{
  

  render(){
    let guitar_arr = this.props.collection
    console.log(guitar_arr)
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

//     fetch(`http://localhost:9292/order/${this.props.customer.id}`, {
//           method: "PATCH",
//           headers: {
//               "Content-type": "application/json"
//           },
//           body: JSON.stringify({
            
//           })
//     })
//     .then(res => res.json())
//     .then(res => {
    
// })