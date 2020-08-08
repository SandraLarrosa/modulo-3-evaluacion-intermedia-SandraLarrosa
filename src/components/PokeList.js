import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import '../stylesheets/PokeList.scss';

const PokeList = (props) => {
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
      <ul className='contentCards'>{listPokemon}</ul>
    </>
  );
};

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
};


export default PokeList;
