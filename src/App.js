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
import './App.css';


export default class App extends Component{
  state = {
    guitars: [],
    user: {},
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

  render(){
    return(
      <Router>
        <Navigation user={this.state.user}  />
          <Switch>
            <Route path='/guitars'>
              <GuitarsContainer guitars={this.state.guitars} />
            </Route>
            <Route exact path='/yourguitars'>
              <div>Customers collection</div>
              <CustomerGuitars />
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