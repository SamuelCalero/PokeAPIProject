import React from 'react'
import Carta from './Carta'

export default function ListarPokemon({pokemon}) {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-3">

      {
            pokemon.map((value,index)=>
                <Carta key={index}{...value}/>
            )}
    
  </div>
  )
}
