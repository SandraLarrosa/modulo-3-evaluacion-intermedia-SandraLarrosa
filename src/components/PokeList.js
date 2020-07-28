import React from 'react';
import Pokemon from './Pokemon';


const PokeList = props => {
    console.log(props.data);
    const listPokemon = props.data.map((pokemon, index) => {
        return <li key={index}><Pokemon id={pokemon.id} img={pokemon.url} name={pokemon.name} types={pokemon.types}/></li>
    })
    return (
        <ul>
            {listPokemon}
        </ul>
    );
};


export default PokeList;