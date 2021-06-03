import React, {Component} from 'react'
import CustGuitarCard from './CustGuitarCard'

export default class CustomerGuitars extends Component{

  state = {
    custGuitars: []
  }

  

  render(){

      return(
        <div >
          {this.state.custGuitars.map(guitar => <CustGuitarCard />)}
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