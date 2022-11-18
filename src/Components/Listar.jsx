import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import ListarPokemon from './ListarPokemon';
import Filtros from './Filtros';
export default function Listar() {
    
    const [pokemon,setPokemon] = useState([
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
    ]);

    const getPokemons = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=102&offset=0')
        .then((response)=>{
            setPokemon(response.data.results);
        });
    }
    useEffect(()=>getPokemons(),[]);
  return (
    <div className='row gx-5'>
        {/* <Filtros pokemon={pokemon}/>*/}
        <ListarPokemon pokemon={pokemon}/>
        
    </div>
  )
}
