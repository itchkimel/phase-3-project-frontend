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

  // addToCart = (e) => { 
  //   console.log(e)
  //   this.setState({
  //     cartItems: e
  //   })
  //   fetch(`http://localhost:9292/customer/${this.state.customer.name}`, {
  //     method: "PATCH",
  //     headers: {
  //         "Content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       order_history: this.state.cartItems
  //     })
  //  })
  //     .then(res => res.json())
  //     .then((res) => {
  //        console.log(res)
  //     })
  // }

  handleCustomer = (e) => {
    // console.log(e)
    this.setState({
      customer: e
    })
  }

  render(){
    return(
      <Router>
        <Navigation user={this.state.user}  />
          <Switch>
            <Route path='/guitars'>
              <GuitarsContainer guitars={this.state.guitars} addToCart={this.addToCart} />
            </Route>
            <Route exact path='/yourguitars'>
              <CustomerGuitars customer={this.state.customer} />
            </Route>
              <Route exact path='/cart'>
                <Cart/>
            </Route>
            <Route exact path='/login'>
              <Login handleCustomer={this.handleCustomer} />
            </Route>
            <Route exact path='/'>
              <div>Nick's home page</div>
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