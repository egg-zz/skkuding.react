import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState<string[]>([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(
            res => {
                const names = res.data.results.map((poke: any) => poke.name);
                setPokemonList(names);
            })
    }, [])

    return (
        <div className="container">
            {pokemonList.map((name, index) => (
                <Link to = {`/detail/${name}`} key = {index} className="card">
                    <div className="hover-img">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={name} />
                        <h2>{name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}
