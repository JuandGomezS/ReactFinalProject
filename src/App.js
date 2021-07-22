import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ListContainer';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";





function App() {
  return (


    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ ItemContainer }/>
        <Route exact path='/category/:id' component={ItemContainer}/>
        <Redirect to='/'/>
      </Switch>
      
    </BrowserRouter>

  );
  
}

export default App;
