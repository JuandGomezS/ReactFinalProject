import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ListContainer';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ItemDetails from './components/itemDetails';
import Cart from './components/cart';
import CartProvider from './cartContext';




function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ ItemContainer }/>
          <Route exact path='/category/:id' component={ItemContainer}/>
          <Route exact path={'/item/:id'}  component={ItemDetails}/>
          <Route exact path={'/cart'}  component={Cart}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </CartProvider>

  );
  
}

export default App;
