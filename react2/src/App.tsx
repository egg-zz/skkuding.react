import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>
          <Link to = "/">Pokemon List</Link>
        </h1>
      </nav>
      <Routes>
        <Route path = "/" element = {<PokemonList />} />
        <Route path = "/detail/:id" element = {<PokemonDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}
