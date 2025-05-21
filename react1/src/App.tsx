import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<PokemonList />} />
        <Route path = "/detail/:id" element = {<PokemonDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
