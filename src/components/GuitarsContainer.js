import React, {Component, Fragment} from 'react'
// import {Label, Form, Button, Input} from 'semantic-ui-react'

import GuitarCard from './GuitarCard'

export default class GuitarsContainer extends Component{


  render(){
    
    // const brandFilter = this.props.guitars.filter(guitar => guitar.brand.includes(this.state.filteredDopdown))

      return(
        <div >
          Hello from Guitar container
          {this.props.guitars.map(guitar => <GuitarCard guitar={guitar} />)}
          
        </div>
      )
  }
}