import React, { useState }from 'react';
import listPokemon from '../data/listPokemon.json'
import '../stylesheets/App.scss';
import PokeList from './PokeList';

function App() {
  const [data, setData] = useState(listPokemon)

  return (
    <main className="main">
      <PokeList data={data}/>
    </main>
  );
}

export default App;
