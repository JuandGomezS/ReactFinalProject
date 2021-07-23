import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ListContainer';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ItemDetails from './components/itemDetails';





function App() {
  return (


    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ ItemContainer }/>
        <Route exact path='/category/:id' component={ItemContainer}/>
        <Route exact path={'/item/:id'}  component={ItemDetails}/>
        <Redirect to='/'/>
      </Switch>
      
    </BrowserRouter>

  );
  
}

export default App;
