import React from 'react'
import './PokeStyle.css'
export default function Pokedex() {
  return (
    <div>

<h1 id="heading">Pokédex</h1>
<div className="button-container">
	<button id="left-btn"><i className="fa fa-caret-left"></i></button>
	<div className="pagination current-page">1</div>
	<div className="pagination">2</div>
	<div className="pagination">3</div>
	<div className="pagination">4</div>
	<div className="pagination">5</div>
	<button id="right-btn"><i className="fa fa-caret-right"></i></button>
</div>
<input type="text" class="search-box" placeholder="Search"></input><i class="fas fa-search"></i>

    </div>
  )
}
