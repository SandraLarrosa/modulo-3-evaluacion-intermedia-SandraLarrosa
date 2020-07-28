import React, { useState }from 'react';
import listPokemon from '../data/listPokemon.json'
import '../stylesheets/App.scss';
import PokeList from './PokeList';

function App() {
  const [data, setData] = useState(listPokemon)

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <PokeList data={data}/>
    </div>
  );
}

export default App;
