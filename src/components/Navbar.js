import React, {Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
// import {Label, Form, Button, Input} from 'semantic-ui-react'

export default class Navbar extends Component{

  

  render(){
 
      return(
        <div >
          <NavLink to="/"><a className ="active">Home</a></NavLink>
          <NavLink to="/guitars"><a className ="active">Guitars</a></NavLink>
          <NavLink to="/yourguitars"><a className ="active">Your Guitars</a></NavLink>
        </div>
      )
  }
}