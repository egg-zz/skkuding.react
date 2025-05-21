import React from "react";
import { Pokemon } from '../data/book';
import { Link } from "react-router-dom";

interface Props { 
    pokemon : Pokemon;
    index : number;
}

const PokemonItem = ({ pokemon, index } : Props) => {
    const handleClick = () => {
        localStorage.setItem('hoverPokemon', JSON.stringify(pokemon));
    };

    return(
        <Link to = {`/detail/${index}`} className = "card" onClick = {handleClick}>
            <div className = "hover-img">
                <img src = {`/img/${index+1}.png`} alt = {pokemon.name} />
            </div>
            <div>
                <h2>{pokemon.name}</h2>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Types: {pokemon.types.join(', ')}</p>
            </div>
        </Link>
    );
}

export default PokemonItem;