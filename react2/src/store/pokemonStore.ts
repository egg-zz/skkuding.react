import { create } from 'zustand';
import { Pokemon } from '../data/book';

const initialPokemon: Pokemon = {
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
};

interface PokemonState {
    selectedPokemon: Pokemon;
    setSelectedPokemon: (pokemon: Pokemon) => void;
}

export const usePokemonState = create<PokemonState>((set) => ({
    selectedPokemon: initialPokemon,
    setSelectedPokemon: (pokemon) => set({selectedPokemon: pokemon}),
}))