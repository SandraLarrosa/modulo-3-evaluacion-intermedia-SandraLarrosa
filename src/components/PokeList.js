import React from 'react';
import Pokemon from './Pokemon';
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
      <div className="contentTitle">
        <img className="pokeball"
          src='https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png'
          alt='Pokeball'
        ></img>
        <h1 className='title'>Mi Lista Pokemon</h1>
        <img className="pokeball"
          src='https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png'
          alt='Pokeball'
        ></img>
      </div>
      <ul className='contentCards'>{listPokemon}</ul>
    </>
  );
};

export default PokeList;
