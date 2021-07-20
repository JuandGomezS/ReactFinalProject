import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ListContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer greetings='Hola este es mi e-commerce'/>
      
    </div>
  );
}

export default App;
