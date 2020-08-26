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
    this.cartChild = React.createRef();
  }

  logOut = () => {
    localStorage.removeItem("Auth");
    window.location.href="/login"
  }
 

  render(){

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        localStorage.getItem("Auth") == "true"
          ? ""
          : <Redirect to='/login' />
      )} />
    )

    return (
      <BrowserRouter>
        <div className="App">
          <PrivateRoute/>
          <button className="logoutButton" onClick={this.logOut}>Logout</button>
          <button className="cartButton" onClick={() => this.cartChild.current.showCartList()}><img src={require('./assets/shopping-cart.svg')}/></button>
          <CartList ref={this.cartChild}/>
          <Route exact path="/"><Sellers /></Route>
          <Route path="/products"><Products /></Route>
          <Route path="/login"><Login /></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
