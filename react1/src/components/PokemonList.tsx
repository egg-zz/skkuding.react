import PokemonItem from "./PokemonItem";
import { book } from "../data/book";

function PokemonList() {
    return (
        <div className="container">
            {book.map((pokemon, index) => (
                <PokemonItem key = {index} pokemon = {pokemon} index = {index} />
            ))}
            {/* console.log("PokemonList") */}
        </div>
    );
}

export default PokemonList;