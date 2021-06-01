import React, {Component, Fragment} from 'react'
// import {Label, Form, Button, Input} from 'semantic-ui-react'

import GuitarCard from './GuitarCard'

export default class HomePage extends Component{



  render(){
      return(
        <div >
          Guitars on sale!!
          <GuitarCard />
        </div>
      )
  }
}