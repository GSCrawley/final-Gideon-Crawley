import React from 'react';
import Home from './components/Home'
import StarWars from './components/StarWars.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <StarWars />
      </div>
    </div>
  );
}

export default App;