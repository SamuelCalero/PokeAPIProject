import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import ListarPokemon from './ListarPokemon';
import Filtros from './Filtros';
export default function Listar() {
    
    const [pokemon,setPokemon] = useState([
        {name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/'}
    ]);

    const getPokemons = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=21&limit=21')
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
