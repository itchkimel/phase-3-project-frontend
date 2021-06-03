import React, {Component} from 'react'
import CustGuitarCard from './CustGuitarCard'

export default class CustomerGuitars extends Component{
  

  render(){
    let guitar_arr = this.props.collection
    console.log(guitar_arr)
      return(
        <div >
          {guitar_arr.orders.map(guitar => <CustGuitarCard guitar={guitar}/>)}
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