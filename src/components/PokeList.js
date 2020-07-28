import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

const PokeList = (props) => {
  console.log(props.data);
  const listPokemon = props.data.map((pokemon, index) => {
    return (
      <li key={index}>
        <Pokemon
          id={pokemon.id}
          img={pokemon.url}
          name={pokemon.name}
          types={pokemon.types}
        />
      </li>
    );
  });
  return (
    <>
      <h1 class="title">Mi Lista de Pokemon</h1>
      <ul class="contentCards">{listPokemon}</ul>
    </>
  );
};

export default PokeList;
