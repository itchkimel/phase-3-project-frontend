import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation'
import GuitarsContainer from './components/GuitarsContainer'
import CustomerGuitars from './components/CustomerGuitars'
import HomePage from './components/HomePage';
import Login from './components/Login'
import Cart from './components/Cart'
import './App.css';


export default class App extends Component{
  state = {
    guitars: [],
    customer: '',
    cartItems: [],
    collection: {},
    loggedIn: false,
  }

  componentDidMount(){
    fetch("http://localhost:9292/guitars")
    .then(res => res.json())
    .then( guitars => {
      this.setState({
        guitars
      })
    })
  }

  customersCollection = (e) => {
    // console.log(e)
    this.setState({
      collection: e
    })
  }

  handleCustomer = (e) => {
    console.log(e)
    this.setState({
      customer: e
    })
  }

  handleLogin = () => {
    debugger
  }

  render(){
    return(
      <Router>
        <Navigation customer={this.state.customer}  />
          <Switch>
            <Route path='/guitars'>
              <GuitarsContainer guitars={this.state.guitars} addToCart={this.addToCart} />
            </Route>
            <Route exact path='/yourguitars'>
              <CustomerGuitars customer={this.state.customer} collection={this.state.collection} />
            </Route>
              <Route exact path='/cart'>
                <Cart cartItems={this.state.cartItems} />
            </Route>
            <Route exact path='/login'>
              <Login handleCustomer={this.handleCustomer} customersCollection={this.customersCollection} handleLogin={this.handleLogin} />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route>
              <div>404 No matching URL</div>
            </Route>
          </Switch>
      </Router>
    )
  }
}