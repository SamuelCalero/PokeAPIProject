import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './CartaPokemon.css'
export default function Carta(props) {
    const[pokemon,setPokemon] = useState({
        name: "",
        sprites: {front_default:''},
        base_experience:'',
        weight:'',
        height:''
    })
    
    const getPokemons = (url) =>{
        axios.get(url)
        .then((response)=>{
            setPokemon(response.data)})
    }
    
    useEffect(()=>{
        getPokemons(props.url)
    },[])
  return (
          <div className="pkmn__card" >
        <div className="pkmn__container" >
			<div className="pkmn__picture" >
				<div className="pkmn__cp">XP<span>{pokemon.base_experience}</span></div>
        <img className="pkmn__png"  src={pokemon.sprites.other["official-artwork"].front_default} alt=""/>
				<div className="pkmn__exp-bar"></div>				
			</div>
			<div className="pkmn__info">
					<div className="pkmn__name">{pokemon.name.toUpperCase()}<p className="size-medium">HP {pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}</p></div>
					<div className="pkmn__data">
						<div className="pkmn__type">{pokemon.types[0].type.name}<p class="text--small">Tipo</p></div>
						<div className="pkmn__weight">{pokemon.weight}kg<p className="text--small">Peso</p></div>
						<div className="pkmn__height">{pokemon.height}m<p className="text--small">Altura</p></div>
					</div>
				</div>
		</div>

  </div>
  

  )
}
