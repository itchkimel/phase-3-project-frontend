import React, {Component, Fragment} from 'react'
// import {Label, Form, Button, Input} from 'semantic-ui-react'

import GuitarCard from './GuitarCard'

export default class GuitarsContainer extends Component{



  render(){
      return(
        <div >
          Hello from Guitar container
          <GuitarCard />
        </div>
      )
  }
}