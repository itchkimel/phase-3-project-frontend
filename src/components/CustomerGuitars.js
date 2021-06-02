import React, {Component} from 'react'

<<<<<<< HEAD
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
=======
export default class GuitarsContainer extends Component{
>>>>>>> 4c184150f52540b5688b0cd2abb08ed96768debd

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