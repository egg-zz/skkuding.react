import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../data/book';

export default function PokemonDetail() {
    const [pokemon, setPokemon] = useState<Pokemon>({
        name: '',
        height: '',
        weight: '',
        types: [],
        'base-Experience': '',
        abilities: [],
        hp: '',
        attack: '',
        defense: '',
        'special-attack': '',
        'special-defense': '',
        speed: '',
    });

    const { id } = useParams();
    const index = Number(id);

    useEffect(() => {
        const stored = localStorage.getItem('hoverPokemon');
        if(stored){
            setPokemon(JSON.parse(stored));
        }
    }, []);

    return (
        <>
            <main>
                <div className='card-img'>
                    <img src = {`/img/${index+1}.png`} alt = {pokemon.name} />
                </div>

                <table>
                    <tbody>
                        <tr><td>Id</td><td>{index+1}</td></tr>
                        <tr><td>Name</td><td>{pokemon.name}</td></tr>
                        <tr><td>Height</td><td>{pokemon.height}</td></tr>
                        <tr><td>Weight</td><td>{pokemon.weight}</td></tr>
                        <tr><td>Types</td><td>{pokemon.types.join(', ')}</td></tr>
                        <tr><td>Base-Experience</td><td>{pokemon['base-Experience']}</td></tr>
                        <tr><td>Abilities</td><td>{pokemon.abilities.join(', ')}</td></tr>
                        <tr><td>Hp</td><td>{pokemon.hp}</td></tr>
                        <tr><td>Attack</td><td>{pokemon.attack}</td></tr>
                        <tr><td>Defense</td><td>{pokemon.defense}</td></tr>
                        <tr><td>Special-Attack</td><td>{pokemon['special-attack']}</td></tr>
                        <tr><td>Special-Defense</td><td>{pokemon['special-defense']}</td></tr>
                        <tr><td>Speed</td><td>{pokemon.speed}</td></tr>
                    </tbody>
                </table>
            </main>
        </>
    );
}