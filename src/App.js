import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

  
  addToCart = (e) => {
    this.setState({
      cartItems: [...this.state.cartItems, e]
    })
  }
  
  deleteFromCart = (res) => {
    let deleteGuitar = this.state.cartItems.filter(item => item.id !== res.id)
    // console.log(this.state.cartItems)
    // console.log(res.id)
    // console.log(test)
    
    this.setState({
      cartItems: deleteGuitar
    })
  }
  
  customersCollection = (e) => {
    this.setState({
      collection: e
    })
  }
  
  handleCustomer = (e) => {
    this.setState({
      customer: e
    })
  }
  
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  
  handleLogout = (e) => {
    // e.preventDefault(e) 

    this.setState({
      customer: '',
      cartItems: [],
      collection: {},
      loggedIn: false,
    })
  }


  render(){
    return(
      <Router>
        <Route render={(routerProps) => <Navigation routerProps={routerProps} loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} /> } />
          <Switch>
            <Route path='/guitars'>
              <GuitarsContainer guitars={this.state.guitars} addToCart={this.addToCart} loggedIn={this.state.loggedIn} />
            </Route>
            <Route exact path='/yourguitars'>
              <CustomerGuitars customer={this.state.customer} collection={this.state.collection} />
            </Route>
            <Route exact path='/cart'>
              <Cart cartItems={this.state.cartItems} deleteFromCart={this.deleteFromCart} />
            </Route>
            <Route exact path='/login' render={(routerProps) =>
              <Login routerProps={routerProps} loggedIn={this.state.loggedIn} handleCustomer={this.handleCustomer} customersCollection={this.customersCollection} handleLogin={this.handleLogin} />} />
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