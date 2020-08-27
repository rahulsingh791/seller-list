import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sellers from './component/Sellers';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Products from './component/Products'
import './myapp.css'
import CartList from './component/CartList';
import Login from './Login'

class App extends Component {
  constructor(){
    super()
   
    
    this.logoutButton = React.createRef();
    this.cartButton = React.createRef();
    
    
  }



  componentDidMount(){


  }
 

  render(){

    const PrivateRoute = () => (
      <Route  render={() => (
        localStorage.getItem("Auth") == "true"
          ? ""
          : <Redirect to='/login' />
      )} />
    )

    return (
      <BrowserRouter>
        <div className="App">
          
          <PrivateRoute/>
          <Route exact path="/"><Sellers /></Route>
          <Route path="/products"><Products /></Route>
          <Route path="/login"><Login /></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
