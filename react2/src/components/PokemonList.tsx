import PokemonItem from "./PokemonItem";
import { book } from "../data/book";

export default function PokemonList() {
    return (
        <div className="container">
            {book.map((pokemon, index) => (
                <PokemonItem key = {index} pokemon = {pokemon} index = {index} />
            ))}
        </div>
    );
}
