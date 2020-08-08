import React, { useState } from 'react';
import listPokemon from '../data/listPokemon.json';
import PokeList from './PokeList';
import Title from './Title';

function App() {
  const [data, setData] = useState(listPokemon);

  return (
    <>
      <Title />
      <main className='main'>
        <PokeList data={data} />
      </main>
    </>
  );
}

export default App;
