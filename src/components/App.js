import React from 'react';
import listPokemon from '../data/listPokemon.json'
import '../stylesheets/App.scss';

function App() {
  console.log(listPokemon);

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
