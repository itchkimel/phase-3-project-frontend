import React, {Component, Fragment} from 'react'

import GuitarCard from './GuitarCard'

export default class CustomerGuitars extends Component{

  addGuitarToCustomer = () => {
    fetch(`http://localhost:9292/customer/`)
    .then(res => res.json())
    .then(res => {
    if (res.message == 'null'){
        alert("Please register")
    }else 
        {this.props.handleCustomer(res)}
})
}

  render(){
    console.log(this.props.customer[0])
    let thisCustomer = this.props.customer[0]
    thisCustomer.order_history.replace(/"/g,"")
    console.log(thisCustomer)

      return(
        <div >
          {/* {thisCustomer.order_history.stri} */}
        </div>
      )
  }
}