import React from 'react';
import '../stylesheets/Title.scss';

const Title = () => {
  return (
    <header className='header'>
      <h1 className='title'>My Pokedex</h1>
      <div className='contentTitle'>
        <img
          className='pokeball'
          src='https://media.giphy.com/media/DJM88aCmEeaNG/giphy.gif'
          alt='Pokeball'
        ></img>
        <img
          className='pikachu'
          src='https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif'
          alt='pikachu'
        ></img>
      </div>
    </header>
  );
};

export default Title;
