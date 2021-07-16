import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ListContainer';
import List from './components/ItemList/List';



function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <ItemContainer greetings='Hola este es mi e-commerce'/> */}
      <List/>
    </div>
  );
}

export default App;
