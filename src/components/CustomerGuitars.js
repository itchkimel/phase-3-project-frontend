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